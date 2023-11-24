import { ethers } from "hardhat";

async function main() {
  const Chaincracy = await ethers.getContractFactory("Chaincracy");
  const chaincracy = await Chaincracy.deploy();

  console.log(
    `Deployed Chaincracy to ${chaincracy.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.log("erro")
  console.error(error);
  process.exitCode = 1;
});
