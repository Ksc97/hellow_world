/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const API_URL = process.env.API_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.7.3",
  defaultNetwork: "goerli",
  networks: {
    hardhat:{},
    goerli: {
      url: API_URL,
      accounts: ["0x79c4c7e0880061b8f36c4021099f3cbbaf7152e3afef28604faa98115c2618b0"]
    }
    },
  }

//api key of alchemy
//wallet password


