import styled from 'styled-components';

export const AddCandidateContainer = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    width: 100%;
    height: 100vh;
    background-color: #222831;
`;

export const AddCandidateComponents = styled.div`
    display: flex;
    width: 100%;
    height: 84%;
`;

export const AddCandidateFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`;

export const InputFieldContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 8%;
    margin-top: 3%;
    margin-bottom: 2%;
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

export const PositionDropdown = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    width: 50%;
    height: 8%;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px; 
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px; 
    background-color: #FFF;
    z-index: 1;
`;

export const PositionsContainer = styled.div<{ $isDropdownOpen: boolean }>`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: ${props => props.$isDropdownOpen ? '20%' : '0%'};
    margin-top: -18px;
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