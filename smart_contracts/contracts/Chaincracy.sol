// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chaincracy {
    // Evento para notificar quando um voto for registrado
    event VotoRegistrado(uint256 candidatoId);

    struct Candidato {
        string nomeCandidato;
        uint256 numero;
        uint256 votos;
        string img;
    }

    struct Cargo {
        string nomeCargo;
        uint256 maxNumTam;
    }

    Cargo[] public cargos;
    Candidato[] public candidatos;
    address public owner;
    string public statusVotacao = 'not_started';

    mapping(uint256 => uint256[]) public cargoCandidatos;
    mapping(address => mapping(uint => bool)) public hasCalled;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwnerOf() {
        require(owner == msg.sender, "Apenas o dono pode fazer essa operacao");
        _;
    }

    modifier votacaoAberta() {
        require(keccak256(abi.encodePacked(statusVotacao)) == keccak256(abi.encodePacked('in_progress')), "Votacao finalizada!");
        _;
    }

    function isOwner() public view {
       if(!(owner == msg.sender)) {
        revert("Entrou no IF e a carteira nao eh igual.");
       }
    }

    function adicionarCargo(
        string memory _nomeCargo,
        uint256 _maxNumTam
    ) public onlyOwnerOf {
        for (uint256 i = 0; i < cargos.length; i++) {
            require(
                keccak256(abi.encodePacked(cargos[i].nomeCargo)) != keccak256(abi.encodePacked(_nomeCargo)),
                "Cargo ja existente"
            );
        }

        Cargo memory novoCargo;
        novoCargo.nomeCargo = _nomeCargo;
        novoCargo.maxNumTam = _maxNumTam;
        cargos.push(novoCargo);
    }

    function listarCargos() public view returns (Cargo[] memory) {
        return cargos;
    }

    function cargoNumeroMaximo(string memory _nomeCargo) public view returns (uint256){
        for (uint256 i = 0; i < cargos.length; i++) {
            if(keccak256(abi.encodePacked(cargos[i].nomeCargo)) == keccak256(abi.encodePacked(_nomeCargo))) {
                return cargos[i].maxNumTam;
            }
        }

        revert("Cargo inexistente");
    }

    function adicionarCandidato(
        uint256 _cargoId,
        uint256 _numero,
        string memory _nomeCandidato,
        string memory _img
    ) public onlyOwnerOf {
        for (uint256 i = 0; i < candidatos.length; i++) {
            if (candidatos[i].numero == _numero) {
                uint256[] memory ids = getCandidatosIdsDoCargo(_cargoId);
                for (uint256 j = 0; j < ids.length; j++) {
                    if (ids[j] == i) {
                        revert("numero ja cadastrado!");
                    }
                }
            }
        }

        if (_cargoId > cargos.length - 1) {
            revert("cargo nao existente");
        }

        Candidato memory novoCandidato = Candidato(
            _nomeCandidato,
            _numero,
            0,
            _img
        );
        candidatos.push(novoCandidato);

        // Adicione o mapeamento do ID do candidato para o ID do cargo
        uint256 candidatoId = candidatos.length - 1;
        cargoCandidatos[_cargoId].push(candidatoId);
    }

    function getCandidatosIdsDoCargo(
        uint256 _cargoId
    ) public view returns (uint256[] memory) {
        return cargoCandidatos[_cargoId];
    }

    function getCandidatosDoCargo(
        uint256 _cargoId
    ) public view returns (Candidato[] memory) {
        uint256[] memory candidatoIds = getCandidatosIdsDoCargo(_cargoId);
        Candidato[] memory candidatosRetorno = new Candidato[](candidatoIds.length);

        for (uint256 i = 0; i < candidatoIds.length; i++) {
            uint256 candidatoId = candidatoIds[i];
            candidatosRetorno[i] = candidatos[candidatoId];
        }

        return candidatosRetorno;
        // return cargoCandidatos[_cargoId];
    }
    
    function getCandidatoDoCargo(
        uint256 candidateNumber,
        uint256 _cargoId
    ) public view returns (Candidato memory) {
        Candidato[] memory candidatosDoCargo = getCandidatosDoCargo(_cargoId);

        for (uint256 i = 0; i < candidatosDoCargo.length; i++) {
            if(candidatosDoCargo[i].numero == candidateNumber) {
                return candidatosDoCargo[i];
            }
        }

        revert('Candidato nao encontrado!');
    }

    function ordenarPorVotos(Candidato[] memory _candidatos) internal pure returns (Candidato[] memory) {
        for (uint256 i = 0; i < _candidatos.length - 1; i++) {
            for (uint256 j = 0; j < _candidatos.length - i - 1; j++) {
                if (_candidatos[j].votos < _candidatos[j + 1].votos) {
                    Candidato memory temp = _candidatos[j];
                    _candidatos[j] = _candidatos[j + 1];
                    _candidatos[j + 1] = temp;
                }
            }
        }
        return _candidatos;
    }

    function getListaDeCandidatoPorCargoPrimerioVencedor(uint256 _cargoId) public view returns (Candidato[] memory) {
        uint256[] memory candidatoIds = getCandidatosIdsDoCargo(_cargoId);
        Candidato[] memory candidatosRetorno = new Candidato[](candidatoIds.length);

        for (uint256 i = 0; i < candidatoIds.length; i++) {
         uint256 candidatoId = candidatoIds[i];
            candidatosRetorno[i] = candidatos[candidatoId];
        }

        // Ordenar os candidatos com base no número de votos, do maior para o menor
        candidatosRetorno = ordenarPorVotos(candidatosRetorno);

        return candidatosRetorno;
    }

    function getNomeCandidato(
        uint256 _candidatoId
    ) public view returns (string memory) {
        return candidatos[_candidatoId].nomeCandidato;
    }

    function getInformacaoCandidato(
        uint256 _numero
    ) public view returns (Candidato memory) {
        for (uint256 i = 0; i < candidatos.length; i++) {
            if (candidatos[i].numero == _numero) {
                return candidatos[i];
            }
        }
        revert("Candidato nao encontrado");
    }

    function votar(uint256 _numero, uint256 _cargoId) public votacaoAberta {
        require(
            !hasCalled[msg.sender][_cargoId],
            "Voto ja registrado por essa carteira neste cargo!"
        );

        uint256 indice = buscarIndiceCandidatoPorNumero(_numero, _cargoId);
        candidatos[indice].votos++;
        emit VotoRegistrado(candidatos[indice].numero);

        // Marca que a função foi chamada por esta carteira
        hasCalled[msg.sender][_cargoId] = true;
    }

    function buscarIndiceCandidatoPorNumero(
        uint256 _numero,
        uint256 _cargoId
    ) internal view returns (uint256) {
        for (uint256 i = 0; i < candidatos.length; i++) {
            if (candidatos[i].numero == _numero) {
                uint256[] memory ids = getCandidatosIdsDoCargo(_cargoId);
                for (uint256 j = 0; j < ids.length; j++) {
                    if (ids[j] == i) {
                        return i;
                    }
                }
            }
        }
        revert("Candidato nao encontrado");
    }

    function getVote(
        uint256[] memory _candidatoIds
    ) internal view returns (uint[] memory) {
        uint[] memory votos = new uint[](_candidatoIds.length);
        for (uint256 i = 0; i < _candidatoIds.length; i++) {
            votos[i] = candidatos[_candidatoIds[i]].votos;
        }
        return votos;
    }

    function TotalVotosporCargo(
        uint256 _cargoId
    ) public view returns (uint256[] memory) {
        uint256[] memory candidatoIds = getCandidatosIdsDoCargo(_cargoId);
        return getVote(candidatoIds);
    }
    
    function TotalVotosDoCargo(
        uint256 _cargoId
    ) public view returns (uint256) {
        uint256 totalVotos = 0;

        Candidato[] memory candidatosList = getCandidatosDoCargo(_cargoId);

        for (uint256 i = 0; i < candidatosList.length; i++) {
            totalVotos = totalVotos + candidatosList[i].votos;
        }
        return totalVotos;
    }

    function TotalVotos() public view returns (uint256) {
        uint256 totalVotos = 0;
        for (uint256 i = 0; i < candidatos.length; i++) {
            totalVotos = totalVotos + candidatos[i].votos;
        }

        return totalVotos;
    }

    function finalizarVotacao() public votacaoAberta onlyOwnerOf {
        statusVotacao = 'finished';
    }
    
    function comecarVotacao() public onlyOwnerOf {
        statusVotacao = 'in_progress';
    }
    
    function prepararVotacao() public onlyOwnerOf {
        statusVotacao = 'not_started';
    }

    function statusEleicao () public view returns (string memory) {
        return statusVotacao;
    }
}
