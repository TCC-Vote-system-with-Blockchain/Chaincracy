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
    catch (err) {
        console.log('Carteira já usada na votação!');
        return {
            alreadyVoted: true,
            voted: true,
        }
    }
}

export const addNewPosition = async (name: string): Promise<IApiResponse> => {
    try {
        const account = await getCurrentAccount();
        await chaincracy.methods.adicionarCargo(name).send({ from: account });

        return {
            status: true,
            message: ''
        };
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.log(errorMessage);

        return {
            status: false,
            message: errorMessage
        };
    }
}

export const addNewCandidate = async (positionId: number, name: string, number: number): Promise<IApiResponse> => {
    try {
        const account = await getCurrentAccount();
        await chaincracy.methods.adicionarCandidato(positionId, number, name, '').send({ from: account });

        return {
            status: true,
            message: ''
        };
    }
    catch (err: any) {
        const errorMessage = err.message.match(/'([^']+)'/)[1];
        console.log(errorMessage);

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
        console.log(errorMessage);

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
        console.log(errorMessage);

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
