import React from 'react';
import { HomeContainer } from './styles';
import { Menu } from '../../components/Menu';

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Menu />
            {/* <div style={{ width: '100%', height: '100vh', backgroundColor: 'yellow' }}>alo</div> */}
        </HomeContainer>
    )
}