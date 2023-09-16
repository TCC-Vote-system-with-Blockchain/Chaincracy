import { TextField } from "../TextField";
import { HeaderContainer, ExitAppBox } from "./styles";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <ExitAppBox>
                <ExitToAppIcon style={{ fontSize: '1.8vw' }} />
                <TextField text='Desconectar' style={{
                    cursor: 'pointer',
                    marginLeft: '8%',
                    fontSize: '1.2vw',
                    fontWeight: 'bold'
                }} />
            </ExitAppBox>
        </HeaderContainer>
    );
}