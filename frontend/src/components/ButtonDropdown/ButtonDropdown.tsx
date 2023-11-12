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

    const onHandlerClick: any = () => {
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
                    <TextField text={text}
                        style={{ fontSize: text.length < 10 ? '1.5vw' : '1.3vw', textOverflow: 'ellipsis', fontWeight: 'bold' }}
                    />
                </IconTextBox>
                {
                    //Render dropdown icon only if it has content.
                    dropdown && (
                        <DropdownArrowsBox>
                            {isOpen && (
                                <KeyboardArrowUpIcon style={{
                                    marginRight: '10px',
                                    fontSize: '1.8vw'
                                }} />
                            )
                            }

                            {!isOpen && (
                                <KeyboardArrowDownIcon style={{
                                    marginRight: '10px',
                                    fontSize: '1.8vw'
                                }} />
                            )}
                        </DropdownArrowsBox>
                    )
                }
            </ButtonDropdownBox>

            {
                dropdown && (
                    <DropdownListBox style={{ height: isOpen ? '35vh' : '0vh' }}
                        $haveOneElement={dropdown?.length === 1}
                    >
                        {isOpen && dropdown.map((item, index) => (
                            <TextField
                                key={index}
                                text={item.text}
                                onClick={() => { window.location.href = item.path }}
                                style={{ cursor: 'pointer', fontSize: '1.3vw' }}
                            />
                        ))}
                    </DropdownListBox>
                )}
        </>
    );
}