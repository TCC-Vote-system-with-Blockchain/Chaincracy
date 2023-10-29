interface ICandidato {
    name: string;
    number: number | string;
    vote: number;
    picture: string;
}

interface IVote {
    alreadyVoted: boolean;
    voted: boolean;
}