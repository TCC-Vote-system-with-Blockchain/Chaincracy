import { PopupContainer, BlurBackground, PopupComponents, PopupIcon, PopupText, PopupButtons, PopupBox } from './styles';
import { TextField } from '../TextField';
import { Button } from '../Button';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

interface Props {
    icon?: typeof WarningAmberOutlinedIcon;
    text: string;
    hasButton: boolean;
    isOpen: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

export const Popup: React.FC<Props> = ({ icon: IconComponent, text, hasButton, isOpen, onConfirm, onCancel }) => {
    const iconStyles = {
        color: '#222831',
        fontWeight: 'bolder',
        fontSize: '8vw',
        margin: '3%'
    }

    return (
        <PopupContainer style={{ display: isOpen ? 'block' : 'none' }}>
            <BlurBackground />
            <PopupBox>
                <PopupComponents>
                    <PopupIcon>
                        {IconComponent ? <IconComponent style={{ ...iconStyles }} /> :
                            <WarningAmberOutlinedIcon style={{ ...iconStyles }}
                            />}
                    </PopupIcon>

                    <PopupText>
                        <TextField text={text} style={{
                            color: '#222831',
                            fontWeight: 'bold',
                            fontSize: '2vw',
                            marginTop: '5%'
                        }} />
                    </PopupText>

                    {hasButton && <PopupButtons>
                        <Button text='Cancelar'
                            onClick={onCancel}
                            buttonStyles={{ width: '30%', height: '70%', backgroundColor: '#393E46' }}
                            fontStyles={{ fontSize: '1.3vw', fontWeight: 'bold', color: '#000000' }}
                        />

                        <Button text='Confirmar'
                            onClick={onConfirm}
                            buttonStyles={{ width: '30%', height: '70%', backgroundColor: '#00ADB5' }}
                            fontStyles={{ fontSize: '1.3vw', fontWeight: 'bold', color: '#000000' }}
                        />
                    </PopupButtons>}
                </PopupComponents>
            </PopupBox>
        </PopupContainer>
    );
}