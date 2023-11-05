import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TextField } from "../../components/TextField";
import { Footer } from "../../components/Footer";
import { Popup } from "../../components/Popup";
import {
    AddPositionContainer,
    AddPositionFieldContainer,
    ButtonsBox,
    InputFieldContainer,
    Input
} from "./styles";
import { addNewPosition } from "../../utils/web3/services/chaincracy-service";
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PersonAddDisabledOutlinedIcon from '@mui/icons-material/PersonAddDisabledOutlined';
import { IInsert } from "./models/addCandidato";

export const AddPositionPage: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
    const [positionInput, setPositionInput] = useState('');
    const [error, setError] = useState('');
    const [voted, setVoted] = useState<IInsert>({ alreadyInserted: false, insert: false });

    const handleOnChangePosition = (value: any) => {
        if (value.length > 3) {
            setPositionInput(value);
        }
        else setPositionInput('');
    }

    const handleOnClosePopup = () => {
        setIsPopupOpen(false);
        console.log(`Inserção cancelada.`);
    }

    const handleConfirm = async () => {
        const inputStatus: IApiResponse = await addNewPosition(positionInput);
        if (inputStatus.status) handleInsertConfirmed(false);
        else {
            setError(inputStatus.message);
            handleInsertConfirmed(true);
        }
        setIsPopupOpen(false);
    }

    const handleInsertConfirmed = (alreadyInserted: boolean) => {
        setTimeout(() => {
            setVoted({ alreadyInserted: alreadyInserted, insert: false });
        }, 2000)
        setVoted({ alreadyInserted: alreadyInserted, insert: true });
        setTimeout(() => {
        }, 2000)
    }

    return (
        <AddPositionContainer>
            <Popup text='Confirma a inserção?'
                onConfirm={handleConfirm}
                onCancel={handleOnClosePopup}
                hasButton={true}
                isOpen={isPopupOpen}
            />

            <Popup text={`Inserção realizada com sucesso!`}
                icon={HowToRegOutlinedIcon}
                onCancel={handleOnClosePopup}
                hasButton={false}
                isOpen={voted.insert && !voted.alreadyInserted}
            />

            <Popup text={`Falha ao inserir!<br><br>${error ? `ERRO: ${error}` : ''}`}
                icon={PersonAddDisabledOutlinedIcon}
                onCancel={handleOnClosePopup}
                hasButton={false}
                isOpen={voted.insert && voted.alreadyInserted}
            />

            <Header login={false}
                headerTitle={`Adicionar Novo Cargo`}
                headerTitleSize='2.5vw'
                canBackwards={true}
            />

            <AddPositionFieldContainer>
                <TextField text='Digite o nome do cargo:' style={{ fontSize: '2vw' }} />
                <InputFieldContainer>
                    <Input
                        maxLength={60}
                        minLength={2}
                        onChange={({ target }: any) => handleOnChangePosition(target.value)}
                    />
                </InputFieldContainer>

                <ButtonsBox>
                    <Button
                        text='CONFIRMA'
                        disable={positionInput.length < 3}
                        buttonStyles={{ width: '36%', height: '68%', backgroundColor: positionInput.length > 3 ? '#27B410' : '#26b41075' }}
                        fontStyles={{ fontSize: '1.3vw', fontWeight: 'bolder', color: positionInput.length > 3 ? '#FFFF' : '#ffffff94' }}
                        onClick={() => setIsPopupOpen(true)}
                    />
                </ButtonsBox>
            </AddPositionFieldContainer>
            <Footer />
        </AddPositionContainer >
    );
}