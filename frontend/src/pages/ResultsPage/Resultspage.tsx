import { useEffect, useMemo, useState } from "react";
import { Header } from "../../components/Header";
import { TextField } from "../../components/TextField";
import { getPositions, totalVotes, getMostVotedByPosition, getPositionTotalVotes, getCandidateFromPosition } from "../../utils/web3/services/chaincracy-service";
import {
    CandidatePicture,
    CandidateResult,
    CandidatesResultsContainer,
    IconDropdown,
    PositionDropdown,
    PositionText,
    PositionsContainer,
    Results,
    ResultsDashboard,
    ResultsPageContainer,
    TextBox,
    TotalVoteCard,
    TotalVoteContainer,
} from "./styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Resultspage: React.FC = () => {
    const [totalElectionVotes, getTotalElectionVotes] = useState();
    const [listedPositions, setListedPositions] = useState<string[]>();
    const [candidates, setCandidates] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState({ name: '', id: 0 });
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
    const [positionTotalVotes, setPositionTotalVotes] = useState();
    const [positionTotalWhiteVotes, setPositionTotalWhiteVotes] = useState();
    const [positionTotalNullVotes, setPositionTotalNullVotes] = useState();

    const handleTotalVotesByPosition = async () => {
        const positionTotalVotes = await getPositionTotalVotes(selectedPosition.id);
        setPositionTotalVotes(positionTotalVotes);
    }

    const handleTotalWhiteVotesByPosition = async () => {
        const positionTotalWhiteVotes = await getCandidateFromPosition(1, selectedPosition.id);
        setPositionTotalWhiteVotes(positionTotalWhiteVotes[2]);
    }

    const handleTotalNullVotesByPosition = async () => {
        const positionTotalNullVotes = await getCandidateFromPosition(2, selectedPosition.id);
        setPositionTotalNullVotes(positionTotalNullVotes[2]);
    }

    const handleGetTotalVotes = async () => {
        getTotalElectionVotes(await totalVotes());
        setListedPositions(await getPositions());

        if (listedPositions) setSelectedPosition({ name: listedPositions[0], id: 0 });
        setCandidates(await getMostVotedByPosition(0));

    }

    const handleChangePosition = async (name: string, position: number) => {
        setSelectedPosition({ name: name, id: position });
        setCandidates(await getMostVotedByPosition(position));
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        handleGetTotalVotes();
    }, []);

    useEffect(() => {
        handleTotalVotesByPosition();
        handleTotalWhiteVotesByPosition();
        handleTotalNullVotesByPosition();
    }, [selectedPosition]);

    return (
        <ResultsPageContainer>
            <Header canBackwards={true}
                login={false}
                headerTitle={`Eleição - <strong> Resultados </strong>`}
                headerTitleSize='2.5vw'
            />
            <ResultsDashboard>
                <TotalVoteContainer>
                    <TotalVoteCard>
                        <TextField
                            text={`TOTAL DE VOTOS: ${totalElectionVotes}`}
                        />

                        {
                            selectedPosition.name && (
                                <TextField
                                    text={`Total de votos (${selectedPosition.name}): ${positionTotalVotes}`}
                                    style={{
                                        fontSize: '1.1vw'
                                    }}
                                />
                            )
                        }
                    </TotalVoteCard>

                    <TotalVoteCard>
                        <TextField
                            text={`TOTAL DE VOTOS BRANCOS: ${totalElectionVotes}`}
                        />

                        {
                            selectedPosition.name && (
                                <TextField
                                    text={`Total de votos BRANCOS (${selectedPosition.name}): ${positionTotalWhiteVotes}`}
                                    style={{
                                        fontSize: '1.1vw'
                                    }}
                                />
                            )
                        }
                    </TotalVoteCard>

                    <TotalVoteCard>
                        <TextField
                            text={`TOTAL DE VOTOS NULOS: ${totalElectionVotes}`}
                        />

                        {
                            selectedPosition.name && (
                                <TextField
                                    text={`Total de votos NULOS (${selectedPosition.name}): ${positionTotalNullVotes}`}
                                    style={{
                                        fontSize: '1.1vw'
                                    }}
                                />
                            )
                        }
                    </TotalVoteCard>

                </TotalVoteContainer>
                <Results>
                    <PositionDropdown onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                        <PositionText>
                            <TextField text={selectedPosition.name} />
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

                    <CandidatesResultsContainer>
                        {
                            candidates && candidates.filter(candidate => candidate[0] !== 'Nulo' && candidate[0] !== 'Branco')
                                .map((candidate, index) =>
                                (
                                    <CandidateResult key={index}>
                                        {
                                            index === 0 && <TextField text='VENCEDOR'
                                                style={{
                                                    color: 'black',
                                                    fontSize: '1.5vw',
                                                    fontWeight: 'bold'
                                                }}
                                            />
                                        }
                                        <CandidatePicture src={candidate[3]} />
                                        <TextField
                                            text={candidate[0]}
                                            style={{
                                                color: 'black',
                                                fontWeight: 'bold'
                                            }}
                                        />

                                        <TextField
                                            text={candidate[1]}
                                            style={{
                                                color: 'black',
                                                fontWeight: 'bold'
                                            }}
                                        />

                                        <TextField
                                            text={`Votos recebidos: ${candidate[2]}`}
                                            style={{
                                                color: 'black',
                                                fontWeight: 'bold'
                                            }}
                                        />
                                    </CandidateResult>
                                ))
                        }
                    </CandidatesResultsContainer>
                </Results>
            </ResultsDashboard>
        </ResultsPageContainer>
    );
}
