import React from 'react';
import { HomeContainer } from './styles';
import { Menu } from '../../components/Menu';
import { Dashboard } from '../../components/Dashboard/Dashboard';

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Menu />
            <Dashboard status={'NÃO INICIADA'} />
        </HomeContainer>
    )
}