import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";
import dotenv from 'dotenv';

dotenv.config();

const {
  VITE_POLYGON_MUMBAI_URL,
  VITE_POLYGON_MUMBAI_PRIVATE_KEY
} = process.env;

const config: HardhatUserConfig = {
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  solidity: {
    version: "0.8.19",
  },
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    mumbai: {
      url: VITE_POLYGON_MUMBAI_URL,
      accounts: [`0x${VITE_POLYGON_MUMBAI_PRIVATE_KEY}`],
    },
  },
};

export default config;