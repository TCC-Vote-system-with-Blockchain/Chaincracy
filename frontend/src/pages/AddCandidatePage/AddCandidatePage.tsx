import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TextField } from "../../components/TextField";
import { Footer } from "../../components/Footer";
import { Popup } from "../../components/Popup";
import {
    AddCandidateContainer,
    AddCandidateFieldContainer,
    AddCandidateComponents,
    ButtonsBox,
    InputFieldContainer,
    Input,
    PositionDropdown,
    PositionsContainer,
    TextBox,
    PositionText,
    IconDropdown
} from "./styles";
import { addNewCandidate, getPositions } from "../../utils/web3/services/chaincracy-service";
import { IInsert } from "./models/addCandidato";
import { IApiResponse } from "../../utils/web3/services/models/apiResponse";
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import PersonAddDisabledOutlinedIcon from '@mui/icons-material/PersonAddDisabledOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const AddCandidate: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState({ isOpen: false, message: '' });
    const [listedPositions, setListedPositions] = useState<string[]>();
    const [selectedPosition, setSelectedPosition] = useState<string>('Selecione:');
    const [candidateInput, setCandidateInput] = useState({ positionID: '', name: '', number: '' });
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [voted, setVoted] = useState<IInsert>({ alreadyInserted: false, insert: false });

    const getListedPositions = async () => {
        let positions = await getPositions();
        setListedPositions(positions);
    }

    const handleChangePosition = async (name: string, number: number) => {
        setCandidateInput({ ...candidateInput, positionID: number.toString() });
        setSelectedPosition(name);
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleOnChangeCandidateName = (value: any) => {
        if (value.length >= 3) {
            setCandidateInput({ ...candidateInput, name: value });
        }
        else setCandidateInput({ ...candidateInput, name: '' });
    }

    const handleOnChangeCandidateNumber = (value: any) => {
        if (value.length >= 2) {
            setCandidateInput({ ...candidateInput, number: value });
        }
        else setCandidateInput({ ...candidateInput, number: '' });
    }

    const handleOnClosePopup = () => {
        setIsPopupOpen({ isOpen: false, message: '' });
        console.log(`Inserção cancelada.`);
    }

    const handleConfirm = async () => {
        const inputStatus: IApiResponse = await addNewCandidate(Number(candidateInput.positionID), candidateInput.name, Number(candidateInput.number));
        if (inputStatus.status) handleInsertConfirmed(false);
        else {
            setError(inputStatus.message);
            handleInsertConfirmed(true);
        }
        setIsPopupOpen({ isOpen: false, message: '' });
    }

    const handleInsertConfirmed = (alreadyInserted: boolean) => {
        setTimeout(() => {
            setVoted({ alreadyInserted: alreadyInserted, insert: false });
        }, 2000)
        setVoted({ alreadyInserted: alreadyInserted, insert: true });
        setTimeout(() => {
        }, 2000)
    }

    useEffect(() => {
        getListedPositions();
    }, [])

    return (
        <AddCandidateContainer>
            <Popup text='Confirma a inserção?'
                onConfirm={handleConfirm}
                onCancel={handleOnClosePopup}
                hasButton={true}
                isOpen={isPopupOpen.isOpen}
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
                headerTitle={`Gerenciamento da Eleição`}
                headerTitleSize='2.5vw'
                canBackwards={true}
            />

            <AddCandidateComponents>
                <AddCandidateFieldContainer>
                    <TextField text='<strong>Selecione o Cargo</strong>' style={{ fontSize: '2.3vw', marginBottom: '2%' }} />
                    <PositionDropdown onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <PositionText>
                            <TextField text={selectedPosition} />
                        </PositionText>
                        <IconDropdown>
                            <KeyboardArrowDownIcon style={{ display: isDropdownOpen ? 'none' : 'block' }} />
                            <KeyboardArrowUpIcon style={{ display: isDropdownOpen ? 'block' : 'none' }} />
                        </IconDropdown>
                    </PositionDropdown>
                    <PositionsContainer $isDropdownOpen={isDropdownOpen && listedPositions?.length}>
                        {listedPositions && listedPositions.map((value, index) => (
                            <TextBox onClick={() => handleChangePosition(value, index)}
                                key={index}>
                                <TextField text={value} style={{ color: 'rgb(34, 40, 49)' }} />
                            </TextBox>
                        ))}
                    </PositionsContainer>
                </AddCandidateFieldContainer>

                <AddCandidateFieldContainer>
                    <TextField text='Digite o nome do candidato:' style={{ fontSize: '1.8vw' }} />
                    <InputFieldContainer>
                        <Input maxLength={40}
                            minLength={3}
                            onChange={({ target }: any) => handleOnChangeCandidateName(target.value)}
                        />
                    </InputFieldContainer>

                    <TextField text='Digite o número do candidato:' style={{ fontSize: '1.8vw' }} />
                    <InputFieldContainer>
                        <Input maxLength={10}
                            onChange={({ target }: any) => handleOnChangeCandidateNumber(target.value)}
                        />
                    </InputFieldContainer>

                    <ButtonsBox>
                        <Button
                            text='CONFIRMA'
                            disable={candidateInput.name && candidateInput.number && candidateInput.positionID ? false : true}
                            buttonStyles={{ width: '36%', height: '68%', backgroundColor: candidateInput.name && candidateInput.number && candidateInput.positionID ? '#27B410' : '#26b41075' }}
                            fontStyles={{ fontSize: '1.3vw', fontWeight: 'bolder', color: candidateInput.name && candidateInput.number && candidateInput.positionID ? '#FFFF' : '#ffffff94' }}
                            onClick={() => setIsPopupOpen({ isOpen: true, message: 'confirm-candidate' })}
                        />
                    </ButtonsBox>
                </AddCandidateFieldContainer>
            </AddCandidateComponents>
            <Footer />
        </AddCandidateContainer >
    );
}