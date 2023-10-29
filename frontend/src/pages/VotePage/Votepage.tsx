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
import Web3 from "web3";
import { AbiItem } from 'web3-utils';
import { getCurrentAccount } from "../../utils/web3/services/web3-service";
import { ChaincracyAbi, ChaincracyAddress } from "../../utils/web3/contracts";
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import { vote } from "../../utils/web3/services/chaincracy-service";

export const VotePage: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState({ isOpen: false, message: '' });
    const [input, setInput] = useState('');
    const [voted, setVoted] = useState<IVote>({ alreadyVoted: false, voted: false });
    const [candidate, setCandidate] = useState<ICandidato>();

    const web3 = new Web3('http://127.0.0.1:8545');
    const contractAddress = ChaincracyAddress;
    const chaincracy = new web3.eth.Contract(ChaincracyAbi as AbiItem[], contractAddress,);

    const tentando = async () => {
        const account = await getCurrentAccount();
        await chaincracy.methods.adicionarCargo('Presidente').send({ from: account });
        await chaincracy.methods.adicionarCandidato(0, 17, 'Bolsonaro', 'qualquer_coisa').send({ from: account });
        await chaincracy.methods.adicionarCandidato(0, 10, 'Marina Silva', 'qualquer_coisa').send({ from: account });
        await chaincracy.methods.adicionarCandidato(0, 11, 'Boulos', 'qualquer_coisa').send({ from: account });
        await chaincracy.methods.adicionarCandidato(0, 12, 'Ciro', 'qualquer_coisa').send({ from: account });

        const naosei = await chaincracy.methods.getNomeCandidato(0).call();
        console.log(naosei);
    }

    // tentando();

    const getCandidateInputed = async (input: string) => {
        let candidate: ICandidato = await getCandidate(Number(input));
        console.log(candidate);
        setCandidate(candidate);
    }


    const handleOnChange = (value: any) => {
        if (value.length === 2) {
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
            let voteStatus: IVote = await vote(Number(input), 0);

            if (!voteStatus.alreadyVoted) {
                console.log(`Voto computado! Número do candidato: ${input}`);
                handleVoteConfirmed(false);
            }
            else {
                handleVoteConfirmed(true);
            }
        }
        else {
            console.log('Voto em BRANCO computado!');
            handleVoteConfirmed(false);
        }
        setIsPopupOpen({ isOpen: false, message: '' });
    }

    const handleVoteConfirmed = (alreadyVoted: boolean) => {
        setTimeout(() => {
            setVoted({ alreadyVoted: alreadyVoted, voted: false });
        }, 2000)
        setVoted({ alreadyVoted: alreadyVoted, voted: true });
        setTimeout(() => {
            // window.location.href = '/'
        }, 2000)
    }

    useEffect(() => {
        getCandidateInputed(input);
    }, [input]);


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
                headerTitle={`Votação - <strong> DEPUTADO ESTADUAL </strong>`}
                headerTitleSize='2.5vw'
                canBackwards={true}
            />

            <VotePageComponents>
                <VoteFieldContainer>
                    <TextField text='Digite o número do candidato:' style={{ fontSize: '2.3vw' }} />
                    <InputFieldContainer>
                        <Input maxLength={2}
                            onChange={({ target }: any) => handleOnChange(target.value)}
                        />
                    </InputFieldContainer>

                    <ButtonsBox>
                        <Button text='CONFIRMA'
                            disable={input.length !== 2 ? true : false}
                            buttonStyles={{ width: '36%', height: '68%', backgroundColor: input.length === 2 ? '#27B410' : '#26b41075' }}
                            fontStyles={{ fontSize: '1.3vw', fontWeight: 'bolder', color: input.length === 2 ? '#FFFF' : '#ffffff94' }}
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