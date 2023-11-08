import styled from 'styled-components';

export const AddPositionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #222831;
`;

export const AddPositionFieldContainer = styled.div`
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