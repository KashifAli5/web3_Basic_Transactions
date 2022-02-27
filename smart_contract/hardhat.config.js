// https://eth-ropsten.alchemyapi.io/v2/OzODU1DhdLlnjdh6kPPMsxJXOb0S9onl

//const { network } = require('hardhat');

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: ' https://eth-ropsten.alchemyapi.io/v2/OzODU1DhdLlnjdh6kPPMsxJXOb0S9onl',
      accounts: ['bdf5d2520d316200721108458a02a2bce47cd43f41d5bef5217ba29aff08a42e']
    }
  } 
}