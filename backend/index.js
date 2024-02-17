require('dotenv').config();
const express = require('express');
const Web3 = require('web3');
const HDWalletProvider = require('@truffle/hdwallet-provider');

const app = express();
const port = process.env.PORT || 3000;

// Configure Web3 with an HDWalletProvider and Infura
const provider = new HDWalletProvider(
  process.env.MNEMONIC,
  `https://rinkeby.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
);
const web3 = new Web3(provider);

// Assuming you have an ABI for your contract
const contractABI = []; // Add your contract ABI here
const contractAddress = process.env.CONTRACT_ADDRESS;

// Create a contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

app.get('/', (req, res) => {
  res.send('Hello, Web3 World!');
});

// Example route: Read data from your contract
app.get('/readContract', async (req, res) => {
  try {
    // Example: Call a public view function of your contract
    const data = await contract.methods.yourContractMethod().call();
    res.json({ data });
  } catch (error) {
    console.error('Error accessing the contract:', error);
    res.status(500).send('Error accessing the contract');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
