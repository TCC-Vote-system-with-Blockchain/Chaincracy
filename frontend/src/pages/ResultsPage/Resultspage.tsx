import { Header } from "../../components/Header";
import { TextField } from "../../components/TextField";
import { getMostVotedCandidatesList } from "../../utils/candidatesQuery";
import {
    CandidateNameField,
    CandidateNumberField,
    CandidateRow,
    ElectionResultTableContainer,
    ElectionWinnerContainer,
    ResultsPageContainer,
    WinnerBox,
    WinnerInfoBox,
    WinnerPictureBox,
    WinnerCandidateNameField,
    WinnerCandidateNumberField,
    CandidateVoteField,
    WinnerCandidateVoteField,
    SectionTitle,
    ElectionResultTable,
    TableHeaderComponents,
    HeaderColumn,
    CandidatePicture,
    CandidatePictureBox,
    CandidatePlacimentField
} from "./styles";

export const Resultspage: React.FC = () => {
    const typeOfResults = 'DEPUTADO ESTADUAL';
    const candidatesList = getMostVotedCandidatesList();
    const winnerCandidate = getMostVotedCandidatesList()[0];

    return (
        <ResultsPageContainer>
            <Header canBackwards={true}
                canDesconnect={true}
                headerTitle={`Resultados - <strong> ${typeOfResults} </strong>`}
                headerTitleSize='2.5vw'
            />

            <SectionTitle>
                <TextField style={{
                    color: 'black',
                    fontSize: '2.7vw',
                    fontWeight: 'bold',
                    borderLeft: '10%'
                }}
                    text='VENCEDOR'
                />
            </SectionTitle>
            <ElectionWinnerContainer>
                <WinnerBox>
                    <WinnerInfoBox>
                        <WinnerCandidateNameField>
                            <TextField style={{ color: 'white', fontSize: '2vw' }}
                                text={winnerCandidate.name}
                            />
                        </WinnerCandidateNameField>
                        <WinnerCandidateNumberField>
                            <TextField style={{ color: 'white', fontSize: '2vw' }}
                                text={`${winnerCandidate.number}`}
                            />
                        </WinnerCandidateNumberField>
                        <WinnerCandidateVoteField>
                            <TextField style={{ color: 'white', fontSize: '5vw', fontWeight: 'bold' }}
                                text={`TOTAL: ${winnerCandidate.vote}`}
                            />
                        </WinnerCandidateVoteField>
                    </WinnerInfoBox>
                    <WinnerPictureBox>
                        <CandidatePictureBox>
                            <CandidatePicture src={winnerCandidate?.picture} />
                        </CandidatePictureBox>
                    </WinnerPictureBox>
                </WinnerBox>
            </ElectionWinnerContainer>

            <SectionTitle>
                <TextField style={{
                    color: 'black',
                    fontSize: '2.7vw',
                    fontWeight: 'bold',
                    borderLeft: '10%'
                }}
                    text='RESULTADO'
                />
            </SectionTitle>

            <ElectionResultTableContainer>
                <ElectionResultTable>
                    <TableHeaderComponents>
                        <HeaderColumn>
                            <TextField
                                style={{ color: 'white' }}
                                text='COLOCAÇÃO'
                            />
                        </HeaderColumn>
                        <HeaderColumn>
                            <TextField
                                style={{ color: 'white' }}
                                text='NOME'
                            />
                        </HeaderColumn>
                        <HeaderColumn>
                            <TextField
                                style={{ color: 'white' }}
                                text='NÚMERO'
                            />
                        </HeaderColumn>
                        <HeaderColumn>
                            <TextField
                                style={{ color: 'white' }}
                                text='QUANTIDADE TOTAL DE VOTOS'
                            />
                        </HeaderColumn>
                    </TableHeaderComponents>
                    {candidatesList.map((candidate, index) => (
                        <CandidateRow key={index}>
                            <CandidatePlacimentField>
                                <TextField style={{ color: 'black', marginLeft: '30%' }}
                                    text={`${index + 1}º`}
                                />
                            </CandidatePlacimentField>
                            <CandidateNameField>
                                <TextField style={{ color: 'black', marginLeft: '30%' }}
                                    text={candidate.name}
                                />
                            </CandidateNameField>
                            <CandidateNumberField>
                                <TextField style={{ color: 'black' }}
                                    text={`${candidate.number}`}
                                />
                            </CandidateNumberField>
                            <CandidateVoteField>
                                <TextField style={{ color: 'black' }}
                                    text={`${candidate.vote}`}
                                />
                            </CandidateVoteField>
                        </CandidateRow>
                    ))}
                </ElectionResultTable>
            </ElectionResultTableContainer>
        </ResultsPageContainer>
    );
}