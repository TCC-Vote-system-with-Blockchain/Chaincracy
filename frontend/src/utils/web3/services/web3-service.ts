export const connectWallet = async (): Promise<void> => {
    try {
        await window.ethereum.request({
            method: 'eth_requestAccounts',
        });
        console.log('Carteira conectada!');
    }
    catch (err) {
        console.log(`Unable to connect your wallet \n ${err}`);
    }
}

export const checkIfWalletIsConnected = async () => {
    try {
        const accounts = await window.ethereum.request({
            method: 'eth_accounts',
        });

        if (accounts.length) {
            return true;
        }
    }
    catch (err) {
        console.error('No connected accounts found');
    }
}

export const getCurrentAccount = async () => {
    try {
        const accountList = await window.ethereum.request({
            method: 'eth_accounts',
        });
        return accountList[0];
    }
    catch (err) {
        console.log(`Unable to get the wallet \n ${err}`);
    }
}
