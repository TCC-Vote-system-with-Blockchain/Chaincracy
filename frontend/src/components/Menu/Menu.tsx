import { TextField } from "../TextField/TextField";
import { ButtonDropdown } from "../ButtonDropdown";
import { ChaincracyTitle, TitleBox, MenuContainer, Separator, WalletInfoBox, WalletTextBox } from "./styles"
import { IDropdownContent } from "../ButtonDropdown/model/models";
import { getCurrentAccount } from "../../utils/web3/services/web3-service";
import { useEffect, useState } from "react";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { getElectionStatus } from "../../utils/web3/services/chaincracy-service";

export const Menu: React.FC = () => {
    const [currentAccount, setCurrentAccount] = useState();
    const [electionInProgress, setElectionInProgress] = useState<boolean>(false);
    const [dashboardDropdown, setDashboardDropdown] = useState<IDropdownContent[]>([]);

    const isElectionFinished = async (): Promise<void> => {
        const ElectionStatus = await getElectionStatus();

        if (ElectionStatus === 'in_progress') setElectionInProgress(true);
    }

    const handleCurrentAccount = async () => {
        const currentAccount = await getCurrentAccount();
        setCurrentAccount(currentAccount);
    }

    useEffect(() => {
        handleCurrentAccount();
        isElectionFinished();
        dashboardDropdownContents();
    }, [])

    const dashboardDropdownContents = async () => {
        const ElectionStatus = await getElectionStatus();

        const content = [
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
        ];

        if (ElectionStatus === 'finished') {
            content.unshift(
                {
                    text: 'Resultados',
                    path: '/results'
                },
            )
        }

        setDashboardDropdown(content);
    }


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
                dropdown={dashboardDropdown} />

            <ButtonDropdown text='Gerenciamento da Eleição'
                icon={ManageAccountsOutlinedIcon}
                dropdown={electionManagementdropdownContents} />

            {electionInProgress && <ButtonDropdown text='Votação' path='/vote' />}

        </MenuContainer >
    )
}