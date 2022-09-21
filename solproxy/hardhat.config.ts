import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    ropsten: {
      // url: 'https://eth-ropsten.alchemyapi.io/v2/GWmy_TbSbZnzj7bXtprOXD8IwqnMastX',
      url:"https://eth-ropsten.alchemyapi.io/v2/GWmy_TbSbZnzj7bXtprOXD8IwqnMastX",
      accounts:
        // process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        ['4394a9ab9c42f2efccd246ed9ecdcd3127fbe6f07f4eb66874d5e575b686b311']
      },
  },
};

export default config;
