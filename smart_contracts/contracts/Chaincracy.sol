// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Chaincracy{

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
    }
        
    Cargo[] public cargos;
    Candidato[] public candidatos;
    address public owner;
    bool public statusVotacao = true;

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
        require(statusVotacao == true, "Votacao finalizada");
        _;
    }

    function adicionarCargo(string memory _nomeCargo) public onlyOwnerOf votacaoAberta{
        Cargo memory novoCargo;
        novoCargo.nomeCargo = _nomeCargo;
        cargos.push(novoCargo);

    }
    function adicionarCandidato(uint256 _cargoId, uint256 _numero, string memory _nomeCandidato, string memory _img) public onlyOwnerOf votacaoAberta{
        
        for (uint256 i = 0; i < candidatos.length; i++) {
            if (candidatos[i].numero == _numero) {
                uint256[] memory ids = getCandidatosIdsDoCargo(_cargoId);
                for(uint256 j = 0; j < ids.length; j++){
                    if(ids[j] == i){
                        revert("numero ja cadastrado!");
                    }
                }
            }
        }
        if(_cargoId > cargos.length -1){
            revert("cargo nao existente");
        }
        Candidato memory novoCandidato = Candidato(_nomeCandidato, _numero, 0, _img);
        candidatos.push(novoCandidato);

        // Adicione o mapeamento do ID do candidato para o ID do cargo
        uint256 candidatoId = candidatos.length - 1;
        cargoCandidatos[_cargoId].push(candidatoId);
    }

    function getCandidatosIdsDoCargo(uint256 _cargoId) public view returns (uint256[] memory) { 
        return cargoCandidatos[_cargoId];
    }

    function getCandidatosDoCargo(uint256 _cargoId) public view returns (string[] memory) {

        string[] memory candidatosRetorno = new string[](candidatos.length);
        uint256[] memory candidatoIds = getCandidatosIdsDoCargo(_cargoId);

        for (uint256 i = 0; i < candidatoIds.length; i++) {
            candidatosRetorno[i] = candidatos[i].nomeCandidato;
                
        }
        
        return candidatosRetorno; 
        // return cargoCandidatos[_cargoId];
    }

    function getNomeCandidato(uint256 _candidatoId) public view returns (string memory) {
        return candidatos[_candidatoId].nomeCandidato;
    }
    
    function getInformacaoCandidato(uint256 _numero) public view returns (Candidato memory) {
        for (uint256 i = 0; i < candidatos.length; i++) {
            if (candidatos[i].numero == _numero) {
                return candidatos[i];
            }
        }
        revert("Candidato nao encontrado"); 
    }

    function votar(uint256 _numero, uint256 _cargoId) public votacaoAberta {
        require(!hasCalled[msg.sender][_cargoId], "Voto ja registrado por essa carteira neste cargo!");

        uint256 indice = buscarIndiceCandidatoPorNumero(_numero, _cargoId);
        candidatos[indice].votos++;
        emit VotoRegistrado(candidatos[indice].numero);

        // Marca que a função foi chamada por esta carteira
        hasCalled[msg.sender][_cargoId] = true;
    }

    function buscarIndiceCandidatoPorNumero(uint256 _numero, uint256 _cargoId) internal view returns (uint256) {
        for (uint256 i = 0; i < candidatos.length; i++) {
            if (candidatos[i].numero == _numero) {
                uint256[] memory ids = getCandidatosIdsDoCargo(_cargoId);
                for(uint256 j = 0; j < ids.length; j++){
                    if(ids[j] == i){
                        return i;
                    }
                }
            }
        }
        revert("Candidato nao encontrado");
    }

    function getVote(uint256[] memory _candidatoIds) internal view returns (uint[] memory){
        uint[] memory votos = new uint[](_candidatoIds.length);
        for (uint256 i = 0; i < _candidatoIds.length; i++) {
        votos[i] = candidatos[_candidatoIds[i]].votos;
        }
        return votos;
    }

    function TotalVotosporCargo(uint256 _cargoId) view public returns (uint256[] memory) {
        uint256[] memory candidatoIds = getCandidatosIdsDoCargo(_cargoId);
        return getVote(candidatoIds);
    }

    function finalizarVotacao() public{
        statusVotacao = false;
    }

}