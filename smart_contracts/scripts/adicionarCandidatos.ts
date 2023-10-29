import { ethers } from "hardhat";

async function main(): Promise<void> {
  const Contract = await ethers.getContractFactory("Chaincracy");
  const contract = Contract.attach("0x5fbdb2315678afecb367f032d93f642f64180aa3");
  
  // Chame uma função do seu contrato
  let response = await contract.adicionarCargo('deputado');
  response  = await contract.adicionarCandidato(0,1,'frate','a');
  response  = await contract.adicionarCandidato(0,2,'joão','a');
  response  = await contract.adicionarCandidato(0,3,'eduardo','a');
  response  = await contract.adicionarCandidato(0,0,'branco','a');
  console.log(response);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
