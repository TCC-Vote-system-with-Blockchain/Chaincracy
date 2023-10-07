import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const polygonAPIKey: string | undefined = process.env.POLYGON_API_KEY;
const polygonMainnetPrivateKey: string | undefined = process.env.POLYGON_MAINNET_PRIVATE_KEY;

console.log(polygonAPIKey);
const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    ...polygonMainnetPrivateKey && polygonAPIKey && {
      mainnet: {
        url: process.env.POLYGON_MAINNET_URL,
        accounts: [polygonMainnetPrivateKey]
      }
    }
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};

export default config;