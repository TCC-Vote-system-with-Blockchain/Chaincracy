import styled from 'styled-components';

export const DashboardContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #222831;
`;

export const ElectionInfoBoxArea = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 25vh;
`;

export const ElectionInfosBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 25vh;
    margin-top: 2%;
`;

export const ElectionStatusContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 47vh;
`;

export const ElectionStatusBox = styled.div<{ $boxColor: string }> `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    height: 90%;
    border-radius: 10px;
    background-color: ${props => props.$boxColor};
    box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.8);
`;

export const ElectionStatusTitleBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 10vh;
`;

export const ElectionStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 32vh;
`;