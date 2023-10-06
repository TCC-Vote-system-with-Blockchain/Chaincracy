import styled from 'styled-components';

export const TextBox = styled.div`
    text-overflow: ellipsis;
    overflow: hidden; 
`;

export const Text = styled.span<{ $fontColor?: string }>`
    font-family: 'Roboto', sans-serif;
    letter-spacing: 1.8px;
    color: ${props => props.$fontColor ? props.$fontColor : '#FFFF'};
`;
