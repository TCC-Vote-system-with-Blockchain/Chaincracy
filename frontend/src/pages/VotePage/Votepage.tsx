import { useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { TextField } from "../../components/TextField";
import { Footer } from "../../components/Footer";
import { Popup } from "../../components/Popup";
import { getCandidate } from "../../utils/candidatesQuery";
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
import { checkFinalVote, getMaxNumberLengthPosition, getPositions, vote, voteFlow } from "../../utils/web3/services/chaincracy-service";
import { ICandidato, IVote } from "./models/candidato";
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';

export const VotePage: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState({ isOpen: false, message: '' });
    const [input, setInput] = useState('');
    const [selectedPositionNumberLength, setSelectedPositionNumberLength] = useState<number>();
    const [voted, setVoted] = useState<IVote>({ alreadyVoted: false, voted: false });
    const [candidate, setCandidate] = useState<ICandidato>();
    const [positionIndex, setPositionIndex] = useState(0);
    const [voteFlowInfo, setVoteFlowInfo] = useState<string>();

    const getSelectedPositionNumberLength = async () => {
        const numberLength = await getMaxNumberLengthPosition(voteFlowInfo!);
        console.log(numberLength);
        setSelectedPositionNumberLength(numberLength);
    }

    const handleTotalPositions = async (): Promise<void> => {
        const isFinalVote = await checkFinalVote(positionIndex);

        if (isFinalVote) window.location.href = '/';
    }

    const getVoteFlowInfos = async (): Promise<void> => {
        setVoteFlowInfo(await voteFlow(positionIndex));
        handleTotalPositions();
    }

    const getCandidateInputed = async (input: string) => {
        let candidate: ICandidato = await getCandidate(Number(input), positionIndex);
        setCandidate(candidate);
    }

    const handleOnChange = (value: any) => {
        if (value.length == selectedPositionNumberLength) {
            console.log(value);
            setInput(value);
            getCandidateInputed(value);
        }
        else setInput('');
    }

    const handleOnClosePopup = () => {
        setIsPopupOpen({ isOpen: false, message: '' });
        console.log(`Voto não computado`);
    }

    const handleConfirm = async () => {
        if (isPopupOpen.message === 'confirma') {
            let voteStatus: IVote = await vote(Number(input), positionIndex);

            if (!voteStatus.alreadyVoted) {
                console.log(`Voto computado! Número do candidato: ${input}`);
                setPositionIndex(positionIndex + 1);
                setInput('');
                handleVoteConfirmed(false);
            }
            else {
                handleVoteConfirmed(true);
            }
        }
        else {
            console.log('Voto em BRANCO computado!');
            await vote(1, positionIndex);
            setPositionIndex(positionIndex + 1);
            setInput('');
            handleVoteConfirmed(false);
        }
        setIsPopupOpen({ isOpen: false, message: '' });
    }

    const handleVoteConfirmed = (alreadyVoted: boolean) => {
        setTimeout(() => {
            setVoted({ alreadyVoted: alreadyVoted, voted: false });
        }, 2000)
        setVoted({ alreadyVoted: alreadyVoted, voted: true });
        getVoteFlowInfos();
        setTimeout(() => {
        }, 2000)
    }

    useEffect(() => {
        getCandidateInputed(input);
        getVoteFlowInfos();
    }, [input, positionIndex]);

    useEffect(() => {
        handleTotalPositions();
    }, []);

    useEffect(() => {
        getSelectedPositionNumberLength();
    }, [handleTotalPositions]);


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
                onCancel={handleOnClosePopup}
                hasButton={false}
                isOpen={voted.voted && !voted.alreadyVoted}
            />

            <Popup text='Voto já contabilizado com esta carteira!'
                icon={HowToRegOutlinedIcon}
                onCancel={handleOnClosePopup}
                hasButton={false}
                isOpen={voted.voted && voted.alreadyVoted}
            />

            <Header login={false}
                headerTitle={`Votação - <strong> ${voteFlowInfo ? voteFlowInfo : 'Sem Registro'} </strong>`}
                headerTitleSize='2.5vw'
                canBackwards={true}
            />

            <VotePageComponents>
                <VoteFieldContainer>
                    <TextField text='Digite o número do candidato:' style={{ fontSize: '2.3vw' }} />
                    <InputFieldContainer>
                        <Input maxLength={selectedPositionNumberLength}
                            onChange={({ target }: any) => handleOnChange(target.value)}
                        />
                    </InputFieldContainer>

                    <ButtonsBox>
                        <Button text='CONFIRMA'
                            disable={input.length != selectedPositionNumberLength}
                            buttonStyles={{ width: '36%', height: '68%', backgroundColor: input.length == selectedPositionNumberLength ? '#27B410' : '#26b41075' }}
                            fontStyles={{ fontSize: '1.3vw', fontWeight: 'bolder', color: input.length == selectedPositionNumberLength ? '#FFFF' : '#ffffff94' }}
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