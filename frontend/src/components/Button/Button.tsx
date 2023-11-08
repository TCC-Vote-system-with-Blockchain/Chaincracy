import { CSSProperties } from "react";
import { TextField } from "../TextField";
import { ButtonBox, IconTextBox } from "./styles";
import SvgIcon from '@mui/material/SvgIcon';

interface Props {
    id?: string,
    icon?: typeof SvgIcon;
    text: string;
    disable?: boolean;
    buttonStyles: CSSProperties;
    fontStyles: CSSProperties;
    onClick?: () => void;
}

export const Button: React.FC<Props> = ({ id, onClick, text, disable, icon: IconComponent, buttonStyles, fontStyles }) => {

    return (
        <>
            <ButtonBox id={id} onClick={onClick} style={buttonStyles} disabled={disable}>
                <IconTextBox style={{
                    justifyContent: IconComponent ? '' : 'center',
                    width: IconComponent ? '90%' : '100%', ...fontStyles
                }}>
                    {
                        // Render icon only if it was sended in component props.
                        IconComponent && (<IconComponent style={{
                            color: '#FFFF',
                            marginLeft: '5%',
                            marginRight: '10%',
                            ...fontStyles
                        }}
                        />)
                    }
                    <TextField text={text} style={{ textOverflow: 'ellipsis', fontWeight: 'bold', ...fontStyles }} />
                </IconTextBox>
            </ButtonBox>
        </>
    );
}