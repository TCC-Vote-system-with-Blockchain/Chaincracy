import { ChaincracyAbi, ChaincracyAddress } from "../contracts";
import { AbiItem } from 'web3-utils';
import Web3 from "web3";
import { getCurrentAccount } from "./web3-service";
import { IApiResponse } from "./models/apiResponse";

const web3 = new Web3('http://127.0.0.1:8545');
const contractAddress = ChaincracyAddress;
const chaincracy = new web3.eth.Contract(ChaincracyAbi as AbiItem[], contractAddress);

export const vote = async (candidateNumber: number, positionId: number) => {
    try {
        const account = await getCurrentAccount();
        await chaincracy.methods.votar(candidateNumber, positionId).send({ from: account });

        return {
            alreadyVoted: false,
            voted: true,
        }
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];

        if (errorMessage === 'Candidato nao encontrado') {
            const account = await getCurrentAccount();
            await chaincracy.methods.votar(2, positionId).send({ from: account });

            return {
                alreadyVoted: false,
                voted: true,
            }
        }
        console.error('Carteira já usada na votação!');
        return {
            alreadyVoted: true,
            voted: true,
        }
    }
}

export const addNewPosition = async (name: string, numberLength: string): Promise<IApiResponse> => {
    try {
        const account = await getCurrentAccount();
        console.log(Number(numberLength));
        await chaincracy.methods.adicionarCargo(name, Number(numberLength)).send({ from: account });

        return {
            status: true,
            message: ''
        };
    }
    catch (err: any) {
        console.error(err);
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);

        return {
            status: false,
            message: errorMessage
        };
    }
}

export const addNewCandidate = async (positionId: number, name: string, number: number, picture: string): Promise<IApiResponse> => {
    try {
        const account = await getCurrentAccount();

        await chaincracy.methods.adicionarCandidato(positionId, number, name, picture).send({ from: account });

        return {
            status: true,
            message: ''
        };
    }
    catch (err: any) {
        console.error(err);
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);

        return {
            status: false,
            message: errorMessage
        };
    }
}

export const getPositions = async () => {
    const positions = await chaincracy.methods.listarCargos().call();
    const listedPositions = []
    for (let i = 0; i < positions.length; i++) {
        listedPositions.push(positions[i][0]);
    }

    return listedPositions;
}

export const checkFinalVote = async (actualPosition: number): Promise<boolean> => {
    const totalPositions = await getPositions();

    if (totalPositions.length === actualPosition) {
        return true;
    }

    return false
}

export const getCandidatesFromPosition = async (positionID: number) => {
    const candidates = await chaincracy.methods.getCandidatosDoCargo(positionID).call();

    return candidates;
}

export const startElection = async (): Promise<IApiResponse> => {
    try {
        const account = await getCurrentAccount();
        await chaincracy.methods.comecarVotacao().send({ from: account });

        return {
            status: true,
            message: ''
        };
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);

        return {
            status: false,
            message: errorMessage
        };
    }
}

export const finishElection = async (): Promise<IApiResponse> => {
    try {
        const account = await getCurrentAccount();
        await chaincracy.methods.finalizarVotacao().send({ from: account });

        return {
            status: true,
            message: ''
        };
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);

        return {
            status: false,
            message: errorMessage
        };
    }
}

export const getElectionStatus = async (): Promise<string> => {
    const status = await chaincracy.methods.statusEleicao().call();
    return status;
}

export const isMainWallet = async (): Promise<boolean> => {
    try {
        const account = await getCurrentAccount();
        await chaincracy.methods.isOwner().send({ from: account });

        return true;
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);

        return false;
    }
}

export const getCandidateFromPosition = async (candidateNumber: number, positionId: number) => {
    try {
        const candidate = await chaincracy.methods.getCandidatoDoCargo(candidateNumber, positionId).call();

        return candidate;
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);
    }
}

export const voteFlow = async (positionIndex: number) => {
    try {
        const positions = await getPositions();

        if (positionIndex > positions.length) {
            throw new Error('Lista finalizada!');
        }

        return positions[positionIndex];
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);
    }
}

export const totalVotes = async () => {
    try {
        const totalVotes = await chaincracy.methods.TotalVotos().call();

        return totalVotes;
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);
    }
}

export const getMostVotedByPosition = async (positionID: number) => {
    try {
        const candidates = await chaincracy.methods.getListaDeCandidatoPorCargoPrimerioVencedor(positionID).call();

        return candidates;
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);
    }
}

export const getPositionTotalVotes = async (positionID: number) => {
    try {
        const totalVotes = await chaincracy.methods.TotalVotosDoCargo(positionID).call();

        return totalVotes;
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);
    }
}

export const getMaxNumberLengthPosition = async (positionName: string) => {
    try {
        const maxNumberLength = await chaincracy.methods.cargoNumeroMaximo(positionName).call();
        console.log(maxNumberLength);
        return maxNumberLength;
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.error(errorMessage);
    }
}