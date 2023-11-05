import { TextField } from "../TextField/TextField";
import { ButtonDropdown } from "../ButtonDropdown";
import { ChaincracyTitle, TitleBox, MenuContainer, Separator, WalletInfoBox, WalletTextBox } from "./styles"
import { IDropdownContent } from "../ButtonDropdown/model/models";
import { getCurrentAccount } from "../../utils/web3/services/web3-service";
import { useEffect, useState } from "react";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const Menu: React.FC = () => {
    const [currentAccount, setCurrentAccount] = useState();

    const handleCurrentAccount = async () => {
        const currentAccount = await getCurrentAccount();
        setCurrentAccount(currentAccount);
    }

    useEffect(() => {
        handleCurrentAccount();
    })

    const dashboardDropdownContents: IDropdownContent[] = [
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

    const electionManagementdropdownContents: IDropdownContent[] = [
        {
            text: 'Adicionar Novo Cargo',
            path: '/add-position'
        },
        {
            text: 'Adicionar Novo Candidato',
            path: '/add-candidate'
        },
        {
            text: 'Iniciar/Finalizar Eleição',
            path: '/election-status'
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
                        text='Carteira:'
                    />
                    <TextField style={{ fontSize: '1vw', textOverflow: 'ellipsis', overflow: 'hidden' }}
                        title='Account Number'
                        text={`${currentAccount ? currentAccount : 'Sem carteira conectada!'}`}
                    />
                </WalletTextBox>
            </WalletInfoBox>

            <Separator />

            <ButtonDropdown text="Dashboard"
                icon={DashboardIcon}
                dropdown={dashboardDropdownContents} />

            <ButtonDropdown text='Gerenciamento da Eleição'
                path='/management' icon={ManageAccountsOutlinedIcon}
                dropdown={electionManagementdropdownContents} />

            <ButtonDropdown text='Votação' path='/vote' />

        </MenuContainer >
    )
}