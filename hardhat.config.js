require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString()
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";
const projectID = ""

module.exports = {

  networks: {
    hardhat: {
      chainId: 1337
    },
    
    mumbai: {
      // Infura
      url:`https://polygon-mumbai.infura.io/v3/${projectID}`,
      accounts: [privateKey]

    },
    mainnet: {
      // Infura
      url: `https://polygon-mainnet.infura.io/v3/${projectID}`,
      accounts: [privateKey]
    }
    
  },
  solidity: "0.8.4",
};
