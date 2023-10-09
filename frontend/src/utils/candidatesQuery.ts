import { candidatesMock } from "./candidatesMock"
import defaultPic from '../../public/assets/Default_person.jpg'

const candidates = candidatesMock();

export const getCandidate = (numberToFind: number) => {
    const candidate = candidates.find(candidate => candidate.number === numberToFind);
    return candidate ? candidate : {
        name: 'Desconhecido',
        number: '',
        picture: defaultPic,
        vote: 0
    }
}

export const getMostVotedCandidatesList = () => {
    const mostVotedCandidate = candidates.sort((a, b) => b.vote - a.vote);
    return mostVotedCandidate;
}