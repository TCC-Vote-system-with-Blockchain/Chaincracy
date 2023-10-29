import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 9vh;
    background-color: #393E46;
`;

export const BackButtonBox = styled.div`
    display: flex;
    align-items: center;
    width: 25%;
    height: 100%;
`;

export const HeaderTitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
`;

export const LoginButtonBox = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    user-select: none;
    color: #FFFF;
    &active {
    transform: scale(0.9);
    }
`;

export const LogoutButtonBox = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    width: 20%;
    height: 100%;
    display: flex;
    align-items: center;
    user-select: none;
    color: #FFFF;
    &active {
    transform: scale(0.9);
    }
`;
