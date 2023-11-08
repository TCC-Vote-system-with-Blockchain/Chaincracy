export interface ICandidato {
    name: string;
    number: number | string;
    vote: number;
    picture: string;
}

export interface IVote {
    alreadyVoted: boolean;
    voted: boolean;
}