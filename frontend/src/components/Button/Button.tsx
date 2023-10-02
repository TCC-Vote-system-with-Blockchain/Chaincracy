import { CSSProperties } from "react";
import { TextField } from "../TextField";
import { ButtonBox, IconTextBox } from "./styles";
import SvgIcon from '@mui/material/SvgIcon';

interface Props {
    onClick?: () => void;
    icon?: typeof SvgIcon;
    text: string;
    disable?: boolean;
    buttonStyles: CSSProperties;
    fontStyles: CSSProperties;
}

export const Button: React.FC<Props> = ({ onClick, text, disable, icon: IconComponent, buttonStyles, fontStyles }) => {

    return (
        <>
            <ButtonBox onClick={onClick} style={buttonStyles} disabled={disable}>
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