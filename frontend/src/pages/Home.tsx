import React from 'react';
import { TextContainer, Text } from './styles';

export const Home: React.FC = () => {
    return (
        <TextContainer>
            <Text>
                {`HOMEPAGE - INITIAL PROJECT (${process.env.REACT_APP_NAME})`}
            </Text>
        </TextContainer>
    )
}