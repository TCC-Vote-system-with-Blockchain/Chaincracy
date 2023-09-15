import { useState } from "react";
import { TextField } from "../TextField";
import { IDropdownContent } from "./model/models";
import { ButtonDropdownBox, DropdownArrowsBox, IconTextBox, DropdownListBox } from "./styles";
import SvgIcon from '@mui/material/SvgIcon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface Props {
    icon?: typeof SvgIcon;
    dropdown?: IDropdownContent[];
    text: string;
    path?: string;
}

export const ButtonDropdown: React.FC<Props> = ({ text, icon: IconComponent, dropdown, path }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onHandlerClick = () => {
        if (dropdown) {
            setIsOpen(!isOpen);
        }

        if (!dropdown && path) {
            window.location.href = path;
        }
    }

    return (
        <>

            <ButtonDropdownBox onClick={onHandlerClick}>
                <IconTextBox style={{
                    justifyContent: IconComponent ? '' : 'center',
                    width: IconComponent ? '90%' : '100%'
                }}>
                    {
                        // Render icon only if it was sended in component props.
                        IconComponent && (<IconComponent style={{
                            color: '#FFFF',
                            marginLeft: '5%',
                            marginRight: '10%',
                            fontSize: '2vw'
                        }}
                        />)
                    }
                    <TextField text={text} textWeightStyle='bold' fontSize='1.5vw' ellipsis="ellipsis" />
                </IconTextBox>

                {
                    //Render dropdown icon only if it has content.
                    dropdown && <DropdownArrowsBox>
                        {isOpen && <KeyboardArrowUpIcon style={{
                            marginRight: '10px'
                        }} />}

                        {!isOpen && <KeyboardArrowDownIcon style={{
                            marginRight: '10px'
                        }} />}
                    </DropdownArrowsBox>
                }

            </ButtonDropdownBox>
            {
                dropdown && <DropdownListBox style={{ height: isOpen ? '35vh' : '0vh' }}>
                    {isOpen && dropdown.map((item) => (
                        <TextField text={item.text}
                            onClick={() => { window.location.href = item.path }}
                            cursor='pointer'
                            fontSize='1.3vw'
                        />
                    ))}
                </DropdownListBox>
            }
        </>
    );
}