import { ethers } from "hardhat";

async function main(): Promise<void> {
    const Contract = await ethers.getContractFactory("Chaincracy");
    const contract = Contract.attach("0x5fbdb2315678afecb367f032d93f642f64180aa3");
    const accounts = await ethers.getSigners();
    // Chame uma função do seu contrato
    const contractAccount0 = contract.connect(accounts[0]);
    const contractAccount1 = contract.connect(accounts[1]);
    const contractAccount2 = contract.connect(accounts[2]);
    const contractAccount3 = contract.connect(accounts[3]);
    const contractAccount4 = contract.connect(accounts[4]);
    const contractAccount5 = contract.connect(accounts[5]);
    await contractAccount0.votar(1,0);
    await contractAccount1.votar(1,0);
    await contractAccount2.votar(1,0);
    await contractAccount3.votar(2,0);
    await contractAccount4.votar(2,0);
    await contractAccount5.votar(3,0);

    let response = await contract.TotalVotosporCargo(0);
    console.log(response);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
