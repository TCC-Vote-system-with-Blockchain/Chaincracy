import React, { useEffect, useState } from 'react';
import { HomeContainer } from './styles';
import { Menu } from '../../components/Menu';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { IStatus } from '../../components/Dashboard/model/models';
import { getElectionStatus } from '../../utils/web3/services/chaincracy-service';

export const Home: React.FC = () => {
    const [electionStatus, setElectionStatus] = useState<IStatus>();

    const handleChangeElectionStatus = async () => {
        const status = await getElectionStatus();

        switch (status) {
            case 'finished':
                setElectionStatus(IStatus.FINALIZADA);
                break;
            case 'in_progress':
                setElectionStatus(IStatus.EM_ANDAMENTO);
                break;
            default:
                setElectionStatus(IStatus.NAO_INICIADA);
                break;
        }
    }

    useEffect(() => {
        handleChangeElectionStatus();
    }, [])

    return (
        <HomeContainer>
            <Menu />
            <Dashboard status={electionStatus!} />
        </HomeContainer>
    )
}