import { ethers } from "hardhat";

async function main() {
  const chaincracy = await ethers.deployContract("Chaincracy");

  await chaincracy.waitForDeployment();

  console.log(
    `deployed chaincracy`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.log("erro")
  console.error(error);
  process.exitCode = 1;
});
