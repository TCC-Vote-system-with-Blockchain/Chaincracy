import styled from 'styled-components';

export const ButtonBox = styled.button<{ $disable?: boolean }>`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    border-radius: 10px;
    overflow: hidden; 
    outline: inherit;
    border: none;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.8);

    &:not(:disabled):active {
    transform: scale(0.9);
    }
`;

export const IconTextBox = styled.div`
    display: flex;
    align-items: center;
`;