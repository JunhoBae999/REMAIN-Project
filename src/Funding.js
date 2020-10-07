import web3 from './web3';

//contract address
const address = '0x5ae57492a6f2183b973e658ebd529aee7e1d0313'

const abi = [
    {
       "inputs": [],
       "stateMutability": "nonpayable",
       "type": "constructor"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "",
             "type": "string"
          },
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "name": "donationAndValueListForProject",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "_project",
             "type": "string"
          },
          {
             "internalType": "address",
             "name": "_institution",
             "type": "address"
          }
       ],
       "name": "getDonate",
       "outputs": [],
       "stateMutability": "payable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "name": "institutionBalance",
       "outputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "name": "institutionsRegistered",
       "outputs": [
          {
             "internalType": "bool",
             "name": "",
             "type": "bool"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "_project",
             "type": "string"
          },
          {
             "internalType": "address",
             "name": "_institution",
             "type": "address"
          }
       ],
       "name": "permited",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "",
             "type": "string"
          }
       ],
       "name": "permitteddProjects",
       "outputs": [
          {
             "internalType": "bool",
             "name": "",
             "type": "bool"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "_project",
             "type": "string"
          },
          {
             "internalType": "address",
             "name": "_institution",
             "type": "address"
          },
          {
             "internalType": "bytes",
             "name": "_verification",
             "type": "bytes"
          }
       ],
       "name": "postVerification",
       "outputs": [
          {
             "internalType": "bool",
             "name": "",
             "type": "bool"
          }
       ],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "uint256",
             "name": "",
             "type": "uint256"
          }
       ],
       "name": "projects",
       "outputs": [
          {
             "internalType": "string",
             "name": "",
             "type": "string"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "",
             "type": "string"
          }
       ],
       "name": "projectsToInstitution",
       "outputs": [
          {
             "internalType": "address",
             "name": "",
             "type": "address"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "address",
             "name": "_institution",
             "type": "address"
          }
       ],
       "name": "registerInstitution",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "_projectName",
             "type": "string"
          },
          {
             "internalType": "address",
             "name": "_institution",
             "type": "address"
          }
       ],
       "name": "registerProjects",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "_project",
             "type": "string"
          },
          {
             "internalType": "address payable",
             "name": "_institution",
             "type": "address"
          }
       ],
       "name": "trnasferEachFund",
       "outputs": [],
       "stateMutability": "nonpayable",
       "type": "function"
    },
    {
       "inputs": [
          {
             "internalType": "string",
             "name": "",
             "type": "string"
          }
       ],
       "name": "verificationsToProjects",
       "outputs": [
          {
             "internalType": "bytes",
             "name": "",
             "type": "bytes"
          }
       ],
       "stateMutability": "view",
       "type": "function"
    }
 ]

 export default new web3.eth.Contract(abi, address);