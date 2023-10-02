import styled from 'styled-components';

export const VotePageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #222831;
`;

export const VotePageComponents = styled.div`
    display: flex;
    width: 100%;
    height: 84%;
`;

export const VoteFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
`;

export const CandidateScreenContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
`;

export const InputFieldContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 8%;
    margin-top: 7%;
    border-radius: 20px;
    background-color: #FFFF;
`;

export const Input = styled.input`
    font-family: 'Roboto', sans-serif;
    width: 85%;
    height: 94%;
    text-align: center;
    border: 0 none;
    outline: 0;
    font-weight: bolder;
    font-size: 2vw;
`;

export const ButtonsBox = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    height: 10%;
    margin-top: 4%; 
`;

export const CandidateInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 90%;
    border-radius: 20px;
    background-color: #FFFF;
`;

export const CandidatePictureBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
`;

export const CandidateElectionInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 40%;
`;

export const CandidatePicture = styled.img`
    width: 45%;
    height: 90%;
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    overflow: hidden;
`;

export const CandidateName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30%;
`;

export const CandidateNumber = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 70%;
    margin-top: 3%;
`;