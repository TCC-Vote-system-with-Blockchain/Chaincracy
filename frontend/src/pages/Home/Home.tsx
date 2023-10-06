import React from 'react';
import { HomeContainer } from './styles';
import { Menu } from '../../components/Menu';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { IStatus } from '../../components/Dashboard/model/models';

export const Home: React.FC = () => {
    return (
        <HomeContainer>
            <Menu />
            <Dashboard status={IStatus.NAO_INICIADA} />
        </HomeContainer>
    )
}