import { useEffect, useMemo, useState } from "react";
import { Header } from "../../components/Header";
import { TextField } from "../../components/TextField";
import { getPositions, totalVotes, getCandidatesFromPosition, getMostVotedByPosition } from "../../utils/web3/services/chaincracy-service";
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
import { getPicture } from "../../utils/getPicture";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const Resultspage: React.FC = () => {
    const [totalElectionVotes, getTotalElectionVotes] = useState();
    const [listedPositions, setListedPositions] = useState<string[]>();
    const [candidates, setCandidates] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState<string>();
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    const handleGetTotalVotes = async () => {
        getTotalElectionVotes(await totalVotes());
        setListedPositions(await getPositions());

        if (listedPositions) {
            setSelectedPosition(listedPositions[0]);
            setCandidates(await getMostVotedByPosition(0));
        }
    }

    const handleChangePosition = async (name: string, position: number) => {
        setSelectedPosition(name);
        setCandidates(await getMostVotedByPosition(position));
        setIsDropdownOpen(!isDropdownOpen);
    }

    useEffect(() => {
        handleGetTotalVotes();
    }, []);

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
                            text='Total de Votos:'
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '3vw'
                            }}
                        />

                        <TextField
                            text={totalElectionVotes}
                            style={{
                                color: 'black',
                                fontWeight: 'bold',
                                fontSize: '2.5vw'
                            }}
                        />
                    </TotalVoteCard>
                </TotalVoteContainer>
                <Results>
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

                    <CandidatesResultsContainer>
                        {
                            candidates && candidates.map((candidate, index) => (
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
