import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { TextField } from "../../components/TextField";
import { finishElection, getElectionStatus, startElection } from "../../utils/web3/services/chaincracy-service";
import {
    ElectionStatusContainer,
    ElectionStatusContent,
    FinishElectionBox,
    StartElectionBox,
    ElectionStatusOptions,
    CurrentElectionStatus
} from "./styles";
import { IApiResponse } from "../../utils/web3/services/models/apiResponse";
import { Popup } from "../../components/Popup";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';

export const ElectionStatusPage: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState({ isOpen: false, message: '' });
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const [electionStatus, setElectionStatus] = useState<string>('');
    const [confirmEvent, setConfirmEvent] = useState<boolean>(false);
    const [error, setError] = useState('');
    console.log(confirmEvent);
    const handleStatus = () => {
        switch (electionStatus) {
            case 'finished':
                return 'Finalizado.'
            case 'in_progress':
                return 'Em progresso.'
            default:
                return 'Não iniciado.'
        }
    }

    const handleOnClosePopup = () => {
        setIsPopupOpen({ isOpen: false, message: '' });
        console.log(`Eleição não iniciada!`);
    }

    const isElectionRunning = async (): Promise<void> => {
        const ElectionStatus = await getElectionStatus();
        setElectionStatus(ElectionStatus);
        setIsRunning(ElectionStatus === 'in_progress')
    }

    const handleStartElection = async (): Promise<void> => {
        const inputStatus: IApiResponse = await startElection();

        if (inputStatus.status) {
            handleConfirmEvent();
        }
        else {
            setError(inputStatus.message);
            handleConfirmEvent();
        }
        setIsPopupOpen({ isOpen: false, message: '' });
    }

    const handleFinishElection = async (): Promise<void> => {
        const inputStatus: IApiResponse = await finishElection();

        if (inputStatus.status) {
            handleConfirmEvent();
        }
        else {
            setError(inputStatus.message);
            handleConfirmEvent();
        }
        setIsPopupOpen({ isOpen: false, message: '' });
    }

    const handleConfirmEvent = () => {
        debugger;
        setTimeout(() => {
            setConfirmEvent(false);
        }, 2000)
        setConfirmEvent(true);
        setTimeout(() => {
        }, 2000)
    }

    useEffect(() => {
        isElectionRunning();
    }, [electionStatus, confirmEvent])
    return (
        <ElectionStatusContainer>
            <Popup text='Deseja realmente INICIAR a eleição?'
                onConfirm={handleStartElection}
                onCancel={handleOnClosePopup}
                hasButton={true}
                isOpen={isPopupOpen.isOpen}
            />

            <Popup text='Deseja realmente FINALIZAR a eleição?'
                onConfirm={handleFinishElection}
                onCancel={handleOnClosePopup}
                hasButton={true}
                isOpen={isPopupOpen.isOpen && isPopupOpen.message === 'finish'}
            />

            <Popup text={`Ação realizada com sucesso!`}
                icon={ThumbUpAltOutlinedIcon}
                onCancel={handleOnClosePopup}
                hasButton={false}
                isOpen={confirmEvent}
            />

            <Popup text={`Falha!<br><br>${error ? `ERRO: ${error}` : ''}`}
                icon={DoDisturbAltOutlinedIcon}
                onCancel={handleOnClosePopup}
                hasButton={false}
                isOpen={confirmEvent && error.length > 1}
            />

            <Header login={false}
                headerTitle={`Iniciar/Finalizar Votação`}
                headerTitleSize='2.5vw'
                canBackwards={true}
            />

            <ElectionStatusContent>

                <CurrentElectionStatus>
                    <TextField text={`<strong>STATUS DA ELEIÇÃO:</strong> ${handleStatus()}`}
                        style={{ fontSize: '2.5vw', marginTop: '6%' }}
                    />
                </CurrentElectionStatus>

                <ElectionStatusOptions>
                    <StartElectionBox>
                        <TextField text='Clique para <strong>iniciar</strong> a eleição:'
                            style={{ fontSize: '2vw', marginBottom: '6%' }}
                        />

                        <Button
                            text='INICIAR'
                            disable={isRunning}
                            buttonStyles={{ width: '30%', height: '10%', backgroundColor: !isRunning ? '#27B410' : '#26b41075' }}
                            fontStyles={{ fontSize: '1.3vw', fontWeight: 'bolder', color: !isRunning ? '#FFFF' : '#ffffff94' }}
                            onClick={() => setIsPopupOpen({ isOpen: true, message: 'start' })}
                        />
                    </StartElectionBox>

                    <FinishElectionBox>
                        <TextField text='Clique para <strong>finalizar</strong> a eleição:'
                            style={{ fontSize: '2vw', marginBottom: '6%' }}
                        />

                        <Button
                            text='FINALIZAR'
                            disable={!isRunning}
                            buttonStyles={{ width: '30%', height: '10%', backgroundColor: isRunning ? '#27B410' : '#26b41075' }}
                            fontStyles={{ fontSize: '1.3vw', fontWeight: 'bolder', color: isRunning ? '#FFFF' : '#ffffff94' }}
                            onClick={() => setIsPopupOpen({ isOpen: true, message: 'finish' })}
                        />
                    </FinishElectionBox>
                </ElectionStatusOptions>
            </ElectionStatusContent>
            <Footer />
        </ElectionStatusContainer>
    );
}