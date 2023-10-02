import { CSSProperties } from "react";
import { Button } from "../Button";
import { TextField } from "../TextField";
import { HeaderContainer, ExitAppBox, BackButtonBox, HeaderTitleBox } from "./styles";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

interface Props {
    headerTitle?: string;
    headerTitleSize?: string;
    canDesconnect: boolean;
    canBackwards: boolean;
    headerStyles?: CSSProperties;
}

export const Header: React.FC<Props> = ({ canDesconnect, headerTitle, canBackwards, headerTitleSize, headerStyles }) => {
    return (
        <HeaderContainer style={headerStyles}>
            <BackButtonBox>
                {canBackwards && <Button icon={ArrowBackIosOutlinedIcon}
                    text='Voltar'
                    buttonStyles={{ width: '30%', height: '50%', backgroundColor: '#FFFF', marginLeft: '10%' }}
                    fontStyles={{ fontSize: '1.2vw', color: '#222831' }}
                    onClick={() => window.history.back()} />}
            </BackButtonBox>

            <HeaderTitleBox>
                <TextField text={headerTitle} style={{ fontSize: `${headerTitleSize}` }} />
            </HeaderTitleBox>

            <ExitAppBox>
                {canDesconnect && <>
                    <ExitToAppIcon style={{ fontSize: '1.8vw' }} />
                    <TextField text='Desconectar' style={{
                        cursor: 'pointer',
                        marginLeft: '8%',
                        marginRight: '11%',
                        fontSize: '1.2vw',
                        fontWeight: 'bold'
                    }} />
                </>}
            </ExitAppBox>
        </HeaderContainer>
    );
}