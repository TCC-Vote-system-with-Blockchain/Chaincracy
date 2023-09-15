import styled from 'styled-components';

export const TextBox = styled.div`
    text-overflow: ellipsis;
    overflow: hidden; 
`;

export const Text = styled.span<{ $textWeight?: string; $ellipsis?: string; $fontSize?: string; $cursor?: string; }>`
    cursor: ${props => props.$cursor};
    font-weight: ${props => props.$textWeight};
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.$fontSize};
    letter-spacing: 1.8px;
    text-overflow: ${props => props.$ellipsis};
    overflow: ${props => props.$ellipsis ? 'hidden' : ''};
    color: #FFFF;
`;
