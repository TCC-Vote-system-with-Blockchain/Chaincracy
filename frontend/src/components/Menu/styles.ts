import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25%;
    height: 100vh;
    background-color: #00ADB5;
    align-items: center;
`;

export const TitleBox = styled.div`
    display: flex;
    width: 100%;
    height: 9vh;
    margin-bottom: 2px;
    justify-content: center;
    align-items: center;
`;

export const ChaincracyTitle = styled.span`
    font-family: 'Lexend Giga', sans-serif;
    font-size: 2.8vw;
    color: #FFFF;
`;

export const Separator = styled.hr`
    width: 90%;
`;

export const WalletInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 94%;
    height: 12vh;
    align-items: center;
`;

export const WalletTextBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4%;
    text-overflow: ellipsis;
    overflow: hidden; 
    color: #FFFF;
`;