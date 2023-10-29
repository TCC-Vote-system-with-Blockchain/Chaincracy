import { getPicture } from "./getPicture"
import { AbiItem } from 'web3-utils';
import { ChaincracyAbi, ChaincracyAddress } from "./web3/contracts";
import Web3 from "web3";
import defaultPic from '../../public/assets/Default_person.jpg'
import { getCurrentAccount } from "./web3/services/web3-service";

const web3 = new Web3('http://127.0.0.1:8545');
const contractAddress = ChaincracyAddress;
const chaincracy = new web3.eth.Contract(ChaincracyAbi as AbiItem[], contractAddress);

export const getCandidate = async (numberToFind: number) => {
    const account = await getCurrentAccount();
    try {
        const candidate = await chaincracy.methods.getInformacaoCandidato(numberToFind).call();
        const [nomeCandidato, numero, votos] = candidate;

        return {
            name: nomeCandidato,
            number: Number(numero),
            vote: Number(votos),
            picture: getPicture()
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

export const getMostVotedCandidatesList = () => {
    return {};
}