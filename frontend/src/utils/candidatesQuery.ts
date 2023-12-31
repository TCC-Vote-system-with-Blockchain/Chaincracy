import { AbiItem } from 'web3-utils';
import { ChaincracyAbi, ChaincracyAddress } from "./web3/contracts";
import defaultPic from '../../public/assets/Default_person.jpg'
import Web3 from "web3";
import { ICandidato } from "../pages/VotePage/models/candidato";

const web3 = new Web3('http://127.0.0.1:8545');
const contractAddress = ChaincracyAddress;
const chaincracy = new web3.eth.Contract(ChaincracyAbi as AbiItem[], contractAddress);

export const getCandidate = async (candidateNumber: number, positionId: number) => {
    try {
        const candidate = await chaincracy.methods.getCandidatoDoCargo(candidateNumber, positionId).call();
        const [nomeCandidato, numero, votos, img] = candidate;

        return {
            name: nomeCandidato,
            number: Number(numero),
            vote: Number(votos),
            picture: img
        } as ICandidato
    }
    catch (err) {
        return {
            name: 'Desconhecido',
            number: '',
            picture: defaultPic,
            vote: 0
        } as ICandidato
    }
}