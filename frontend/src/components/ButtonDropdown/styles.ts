import styled from 'styled-components';

export const ButtonDropdownBox = styled.div`
    cursor: pointer;
    display: flex;
    width: 80%;
    height: 8vh;
    justify-content: space-between;
    align-items: center;
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

export const DropdownListBox = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    transition: all ease 0.4s;
`;