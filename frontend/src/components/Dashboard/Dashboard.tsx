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
import { IStatus, IStatusColor } from "./model/models";
import { useEffect } from "react";

export const Dashboard: React.FC<{ status: IStatus }> = ({ status }) => {

    const statusColors: IStatusColor = {
        [IStatus.NAO_INICIADA]: '#494F57',
        [IStatus.EM_ANDAMENTO]: '#B4A310',
        [IStatus.FINALIZADA]: '#27B410',
    };

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

            <Header login={true}
                headerTitle=''
                canBackwards={false}
                headerStyles={{ marginBottom: '2%' }} />
            <TextField text='HOMEPAGE' style={{
                fontSize: '2vw',
                fontWeight: 'bolder',
                marginLeft: '4%',
                marginTop: '5%'
            }} />

            <ElectionInfoBoxArea>
                <ElectionInfosBox>
                    {infoBoxContent.map((content, index) => (
                        <InfoBox content={content} key={index} />
                    ))}
                </ElectionInfosBox>
            </ElectionInfoBoxArea>

            <Separator style={{ marginTop: '4%' }} />

            <ElectionStatusContainer>
                <ElectionStatusBox $boxColor={statusColors[status]}>
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