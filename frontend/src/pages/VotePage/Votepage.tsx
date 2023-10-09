import { useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TextField } from "../../components/TextField";
import {
    VotePageContainer,
    VoteFieldContainer,
    CandidateScreenContainer,
    VotePageComponents,
    ButtonsBox,
    CandidateInfoBox,
    CandidatePictureBox,
    CandidateElectionInfoBox,
    CandidatePicture,
    CandidateName,
    CandidateNumber,
    InputFieldContainer,
    Input
} from "./styles";
import { Footer } from "../../components/Footer";
import { Popup } from "../../components/Popup";
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { getCandidate } from "../../utils/candidatesQuery";

export const VotePage: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState({ isOpen: false, message: '' });
    const [input, setInput] = useState('');
    const [voted, setVoted] = useState(false);

    let candidate = getCandidate(Number(input));
    const handleOnChange = (value: any) => {
        if (value.length === 6) {
            setInput(value);
        }
        else setInput('');
    }

    const handleOnClosePopup = () => {
        setIsPopupOpen({ isOpen: false, message: '' });
        console.log(`Voto não computado`);
    }

    const handleConfirm = () => {
        if (isPopupOpen.message === 'confirma') {
            console.log(`Voto computado! Número do candidato: ${input}`);
            handleVoteConfirmed();
        }
        else {
            console.log('Voto em BRANCO computado!');
            handleVoteConfirmed();
        }
        setIsPopupOpen({ isOpen: false, message: '' });
    }

    const handleVoteConfirmed = () => {
        setTimeout(() => {
            setVoted(false);
        }, 2000)
        setVoted(true);
        setTimeout(() => {
            window.location.href = '/'
        }, 2000)
    }

    return (
        <VotePageContainer>
            <Popup text='Confirma seu voto?'
                onConfirm={handleConfirm}
                onCancel={handleOnClosePopup}
                hasButton={true}
                isOpen={isPopupOpen.isOpen}
            />

            <Popup text='Voto computado!'
                icon={HowToRegOutlinedIcon}
                onConfirm={handleConfirm}
                onCancel={handleOnClosePopup}
                hasButton={false}
                isOpen={voted}
            />

            <Header canDesconnect={false}
                headerTitle={`Votação - <strong> DEPUTADO ESTADUAL </strong>`}
                headerTitleSize='2.5vw'
                canBackwards={true}
            />

            <VotePageComponents>
                <VoteFieldContainer>
                    <TextField text='Digite o número do candidato:' style={{ fontSize: '2.3vw' }} />
                    <InputFieldContainer>
                        <Input maxLength={6}
                            onChange={({ target }: any) => handleOnChange(target.value)}
                        />
                    </InputFieldContainer>

                    <ButtonsBox>
                        <Button text='CONFIRMA'
                            disable={input.length !== 6 ? true : false}
                            buttonStyles={{ width: '36%', height: '68%', backgroundColor: input.length === 6 ? '#27B410' : '#26b41075' }}
                            fontStyles={{ fontSize: '1.3vw', fontWeight: 'bolder', color: input.length === 6 ? '#FFFF' : '#ffffff94' }}
                            onClick={() => setIsPopupOpen({ isOpen: true, message: 'confirma' })}
                        />
                        <Button text='BRANCO'
                            buttonStyles={{ width: '36%', height: '68%', backgroundColor: '#FFFF' }}
                            fontStyles={{ fontSize: '1.3vw', fontWeight: 'bolder', color: '#222831' }}
                            onClick={() => setIsPopupOpen({ isOpen: true, message: 'branco' })}
                        />
                    </ButtonsBox>
                </VoteFieldContainer>

                <CandidateScreenContainer>
                    <CandidateInfoBox>
                        <CandidatePictureBox>
                            <CandidatePicture src={candidate?.picture} />
                        </CandidatePictureBox>

                        <CandidateElectionInfoBox>
                            <CandidateName>
                                <TextField text={candidate?.name} style={{ fontSize: '2.5vw', color: '#222831' }} />
                            </CandidateName>

                            <CandidateNumber>
                                <TextField text={`${candidate?.number}`} style={{ fontSize: '4vw', fontWeight: 'bolder', color: '#222831' }} />
                            </CandidateNumber>
                        </CandidateElectionInfoBox>
                    </CandidateInfoBox>
                </CandidateScreenContainer>
            </VotePageComponents>
            <Footer />
        </VotePageContainer >
    );
}