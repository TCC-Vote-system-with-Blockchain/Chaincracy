import { TextField } from "../TextField/TextField";
import { ButtonDropdown } from "../ButtonDropdown";
import { ChaincracyTitle, TitleBox, MenuContainer, Separator, WalletInfoBox, WalletTextBox } from "./styles"
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { IDropdownContent } from "../ButtonDropdown/model/models";

export const Menu: React.FC = () => {
    const dropdownContents: IDropdownContent[] = [
        {
            text: 'Resultados',
            path: '/results'
        },
        {
            text: 'Ajuda/FAQ',
            path: '/help'
        },
        {
            text: 'Suporte',
            path: '/suport'
        },
        {
            text: 'Relatório',
            path: '/report'
        }
    ]

    return (
        <MenuContainer>
            <TitleBox>
                <ChaincracyTitle> Chaincracy </ChaincracyTitle>
            </TitleBox>

            <Separator />

            <WalletInfoBox>
                <AccountBalanceWalletOutlinedIcon style={{ fontSize: '3.5vw', color: '#FFFF' }} />
                <WalletTextBox>
                    <TextField style={{ fontWeight: 'bold', fontSize: '1vw' }}
                        text="Carteira:"
                    />
                    <TextField style={{ fontSize: '1vw', textOverflow: 'ellipsis', overflow: 'hidden' }}
                        title="0x766e503e0891b5b19B98C507ADe6A789884b72fd"
                        text="0x766e503e0891b5b19B98C507ADe6A789884b72fd"
                    />
                </WalletTextBox>
            </WalletInfoBox>

            <Separator />

            <ButtonDropdown text="Dashboard" icon={DashboardIcon} dropdown={dropdownContents} />
            <ButtonDropdown text='Votação' path='/vote' />
        </MenuContainer >
    )
}