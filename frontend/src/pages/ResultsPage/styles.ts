import styled from 'styled-components';

export const ResultsPageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

export const ElectionWinnerContainer = styled.div`
    display: flex;
    width: 100%;
    height: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SectionTitle = styled.div`
    display: flex;
    width: 100%;
    height: 9%;
    align-items: center;
    padding-left: 3%;
`;

export const WinnerBox = styled.div`
    display: flex;
    width: 95%;
    height: 90%;
    border-radius: 20px;
    border-style: solid;
    border-width: 0.5px;
    border-color: black;
    background-color: #00ADB5;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.8);
`;

export const WinnerInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    border-right: solid;
    border-width: 0.5px;
`;

export const WinnerCandidateNameField = styled.div`
    display: flex;
    width: 100%;
    height: 33%;
    align-items: center;
    justify-content: center;
`;

export const WinnerCandidateNumberField = styled.div`
    display: flex;
    width: 100%;
    height: 20%;
    align-items: center;
    justify-content: center;
`;

export const WinnerCandidateVoteField = styled.div`
    display: flex;
    width: 100%;
    height: 60%;
    align-items: center;
    justify-content: center;
`;

export const WinnerPictureBox = styled.div`
    display: flex;
    width: 50%;
    height: 90%;
    justify-content: center;
    margin-top: 1%;
    border-radius: 20px;
    overflow: hidden;
`;

export const CandidatePictureBox = styled.div`
    display: flex;
    width: 90%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const CandidatePicture = styled.img`
    width: 45%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
`;

export const ElectionResultTableContainer = styled.div`
    display: flex;
    width: 100%;
    height: 33%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
`;

export const ElectionResultTable = styled.table`
    border-collapse: collapse;
    width: 95%;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.8);

    tr:nth-child(even){
        background-color: #f2f2f2;
    }
    th {
        position: sticky;
        text-align: left;
        background-color: #00ADB5;
        color: white;
    }
    td, th {
        border: 1px solid #ddd;
        padding: 8px;
    }
`;

export const TableHeaderComponents = styled.tr``;

export const HeaderColumn = styled.th``;

export const TableHeaderRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 25%;
    align-items: center;
    border-style: solid;
    border-width: 0.5px;
    border-color: black;
`;

export const CandidateRow = styled.tr``;

export const CandidatePlacimentField = styled.td``;

export const CandidateNameField = styled.td``;

export const CandidateNumberField = styled.td``;

export const CandidateVoteField = styled.td``;