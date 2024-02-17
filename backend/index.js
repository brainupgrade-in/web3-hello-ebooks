const Web3 = require('web3');
const contractABI = require('./contractABI.json');
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

const web3 = new Web3('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID');
const ebookSalesContract = new web3.eth.Contract(contractABI, contractAddress);
