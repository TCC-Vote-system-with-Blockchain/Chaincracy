import styled from 'styled-components';

export const ResultsPageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

export const ResultsDashboard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #222831;
`;

export const TotalVoteContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    width: 100%;
    height: 100px;
`;

export const TotalVoteCard = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
    background-color: white;
`;

export const Results = styled.div`
    width: 100%;
    flex: 1;
`;

export const PositionDropdown = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: 20%;
    height: 8%;
    margin-top: 50px;
    margin-left: 24px;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px; 
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px; 
    background-color: #FFF;
    z-index: 1;
`;

export const PositionText = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100%;

    & > span {
        width: 100%;
        font-weight: bold;
        color: rgb(34, 40, 49);
    }
`;

export const IconDropdown = styled.div`
    display: flex;
    width: 20%;
    height: 100%;
    align-items: center;
    justify-content: center;
    & > span {
        font-weight: bold;
        color: rgb(34, 40, 49);
    }
`;

export const PositionsContainer = styled.div<{ $isDropdownOpen: boolean | number | undefined }>`
    display: flex;
    flex-direction: column;
    width: 20%;
    height: ${props => props.$isDropdownOpen ? '20%' : '0%'};
    margin-top: -18px;
    margin-left: 24px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px; 
    background-color: #FFF;
    overflow-y: scroll;
    transition: all ease 0.6s;
    z-index: 0;

    & > div:hover {
        cursor: pointer;
        background-color: rgb(100, 100, 100, 0.5);
    }

    & div:nth-child(1) {
        margin-top: 20px;
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #00ADB5;
        border-radius: 20px; 
    }
`;

export const TextBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;

    & > span {
        user-select: none;
    }
`;

export const CandidatesResultsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    margin-top: 30px;

    & > div:nth-child(1) {
        /* background-color: #2badb3; */
        background-color: rgb(0, 173, 181, 1);
    }
`;


export const CandidateResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 20%;
    height: 50%;
    margin-top: 20px;
    margin-left: 23px;
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 1);
`;

export const CandidatePicture = styled.img`
    width: 45%;
    height: 50%;
    margin-top: 10px;
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    overflow: hidden;
`;