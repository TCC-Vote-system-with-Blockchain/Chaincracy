import styled from 'styled-components';

export const PopupContainer = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
`;

export const PopupBox = styled.div`
 position: absolute;
    width: 40%;
    height: 50%;
    border-radius: 10px;
    background-color: #FFFF;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    box-shadow: 4px 6px 6px rgba(0, 0, 0, 0.8);
`;

export const BlurBackground = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    filter: blur(10px);
`;

export const PopupComponents = styled.div`
    position: relative;
    display: flex;
    height: 100%;
    flex-direction: column;
    align-items: center;
`;

export const PopupIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40%;
    margin-top: 4%;
    color: #222831;
`;

export const PopupText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 92%;
    height: 33%;
    color: #222831;
`;

export const PopupButtons = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    margin-top: 8%;
`;