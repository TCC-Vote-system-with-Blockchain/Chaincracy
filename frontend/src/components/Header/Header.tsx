import { CSSProperties, useEffect, useState } from "react";
import { Button } from "../Button";
import { TextField } from "../TextField";
import {
    HeaderContainer,
    LoginButtonBox,
    BackButtonBox,
    HeaderTitleBox
} from "./styles";
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { checkIfWalletIsConnected, connectWallet } from "../../utils/web3/services/web3-service";

interface Props {
    headerTitle?: string;
    headerTitleSize?: string;
    login: boolean;
    canBackwards: boolean;
    headerStyles?: CSSProperties;
}

export const Header: React.FC<Props> = ({ login, headerTitle, canBackwards, headerTitleSize, headerStyles }) => {
    const [hasAccountConnected, setHasAccountConnected] = useState(false);

    const handleLoginButton = async () => {
        await connectWallet();
        window.location.reload();
    }

    const handleConnectedWallets = async () => {
        setHasAccountConnected(await checkIfWalletIsConnected() ? true : false);
    }

    useEffect(() => {
        handleConnectedWallets();
    });

    return (
        <HeaderContainer style={headerStyles}>
            <BackButtonBox>
                {canBackwards && <Button icon={ArrowBackIosOutlinedIcon}
                    text='Voltar'
                    buttonStyles={{ width: '30%', height: '50%', backgroundColor: '#FFFF', marginLeft: '10%' }}
                    fontStyles={{ fontSize: '1.2vw', color: '#222831' }}
                    onClick={() => window.history.length > 0 ? window.history.back() : window.location.href = '/'} />}
            </BackButtonBox>

            <HeaderTitleBox>
                <TextField text={headerTitle} style={{ fontSize: `${headerTitleSize}` }} />
            </HeaderTitleBox>

            {
                login && !hasAccountConnected &&
                <LoginButtonBox onClick={() => handleLoginButton()}>
                    <LoginOutlinedIcon style={{ fontSize: '1.8vw' }} />
                    <TextField text='Conectar' style={{
                        cursor: 'pointer',
                        marginLeft: '8%',
                        marginRight: '11%',
                        fontSize: '1.2vw',
                        fontWeight: 'bold'
                    }} />
                </LoginButtonBox>
            }
        </HeaderContainer >
    );
}