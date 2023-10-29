import { ChaincracyAbi, ChaincracyAddress } from "../contracts";
import { AbiItem } from 'web3-utils';
import Web3 from "web3";
import { getCurrentAccount } from "./web3-service";

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