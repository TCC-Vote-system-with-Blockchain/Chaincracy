import { ethers } from "hardhat";

async function main(): Promise<void> {
  const Contract = await ethers.getContractFactory("Chaincracy");
  const contract = Contract.attach("0x5fbdb2315678afecb367f032d93f642f64180aa3");
  
  // Chame uma função do seu contrato
  let response = await contract.finalizarVotacao();
  response  = await contract.adicionarCandidato(0,1,'frate','a');
  console.log(response);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
