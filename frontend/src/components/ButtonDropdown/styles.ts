import styled from 'styled-components';

export const ButtonDropdownBox = styled.div`
    cursor: pointer;
    display: flex;
    width: 80%;
    min-height: 8vh;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    user-select: none;
    margin-top: 20px;
    border-radius: 10px;
    background-color: #222831;
    overflow: hidden;
`;

export const IconTextBox = styled.div`
    display: flex;
    align-items: center;
`;

export const DropdownArrowsBox = styled.div`
    color: #FFFF;
`;

export const DropdownListBox = styled.div<{ $haveOneElement: boolean | undefined }>`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: ${props => !props.$haveOneElement ? 'space-around' : ''};
    height: ${props => props.$haveOneElement ? 'auto' : ''} !important;
    width: 80%;
    transition: all ease 0.4s;
    
    & > span {
        margin-top: ${props => !props.$haveOneElement ? '' : '25px'};
    }
`;