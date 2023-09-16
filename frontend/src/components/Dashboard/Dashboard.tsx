import { Header } from "../Header/Header";
import { InfoBox } from "../InfoBox";
import { IInfoBox } from "../InfoBox/model/model";
import { Separator } from "../Menu/styles";
import { TextField } from "../TextField";
import {
    DashboardContainer,
    ElectionInfosBox,
    ElectionInfoBoxArea,
    ElectionStatusContainer,
    ElectionStatusBox,
    ElectionStatusTitleBox,
    ElectionStatus
} from "./styles";
import HowToVoteOutlinedIcon from '@mui/icons-material/HowToVoteOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TaskOutlinedIcon from '@mui/icons-material/TaskOutlined';
import GppMaybeOutlinedIcon from '@mui/icons-material/GppMaybeOutlined';
// import { IStatus } from "./model/models";

interface Props {
    status: string
}

export const Dashboard: React.FC<Props> = ({ status }) => {

    const handlerStatusBoxColor: any = () => {

        if (status === 'NÃO INICIADA') {
            return '#494F57';
        }
        else if (status === 'EM ANDAMENTO') {
            return '#B4A310';
        }
        else {
            return '#27B410';
        }
    }
    const infoBoxContent: IInfoBox[] = [
        {
            icon: HowToVoteOutlinedIcon,
            text: 'Seu voto é importante!'
        },
        {
            icon: InfoOutlinedIcon,
            text: 'Salve o número do seu candidato.'
        },
        {
            icon: TaskOutlinedIcon,
            text: 'Não compareceu nas eleições? Não esqueça de justificar seu voto.'
        },
        {
            icon: GppMaybeOutlinedIcon,
            text: 'Dúvidas ou denúncia? Visite nosso FAQ ou Suporte!'
        }
    ]

    return (
        <DashboardContainer>
            <Header />
            <TextField text='HOMEPAGE' style={{
                fontSize: '2vw',
                fontWeight: 'bolder',
                marginLeft: '4%',
                marginTop: '5%'
            }} />

            <ElectionInfoBoxArea>
                <ElectionInfosBox>
                    {infoBoxContent.map(content => (
                        <InfoBox content={content} />
                    ))}
                </ElectionInfosBox>
            </ElectionInfoBoxArea>

            <Separator style={{ marginTop: '4%' }} />

            <ElectionStatusContainer>
                <ElectionStatusBox $boxColor={handlerStatusBoxColor}>
                    <ElectionStatusTitleBox>
                        <TextField text="Status da Eleição:" style={{
                            fontSize: '2vw',
                            fontWeight: 'bolder'
                        }} />
                    </ElectionStatusTitleBox>

                    <ElectionStatus>
                        <TextField text={status} style={{
                            fontSize: '2vw',
                            fontWeight: 'bolder'
                        }} />
                    </ElectionStatus>

                </ElectionStatusBox>
            </ElectionStatusContainer>
        </DashboardContainer>
    );
}