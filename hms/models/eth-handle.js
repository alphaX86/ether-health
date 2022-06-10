const ethAirBalloons = require('ethairballoons');
const path = require('path');
const { default: Web3 } = require('web3');
var web3 = require('web3');
const fs = require('fs');
let savePath = path.resolve(__dirname + '/contracts');

const ethAirBalloonsProvider = ethAirBalloons('http://127.0.0.1:7545', savePath);

const HContr = ethAirBalloonsProvider.createSchema({
  name: "ID_Contr",
  contractName: "idContract",
  properties: [{
          name: "uuid",
          type: "bytes32",
          primaryKey: true
      },
      {
          name: "name",
          type: "bytes32",
      }
  ]
});

//HContr.setAccount(0x8c0057c2d12351AC81606C57b96862f56d4eC55B);
const abi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "payload",
				"type": "string"
			},
			{
				"internalType": "bytes32",
				"name": "ID",
				"type": "bytes32"
			}
		],
		"name": "addRecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "dat",
				"type": "string"
			}
		],
		"name": "dataAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "deleteRecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "payload",
				"type": "string"
			}
		],
		"name": "updateRecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "success",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dataId",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "facts",
		"outputs": [
			{
				"internalType": "string",
				"name": "payload",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "listPointer",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getAllRecords",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "payloads",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "id",
				"type": "bytes32"
			}
		],
		"name": "getRecord",
		"outputs": [
			{
				"internalType": "string",
				"name": "payload",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRecordCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "recCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "recordAddress",
				"type": "bytes32"
			}
		],
		"name": "isRecord",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isRec",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "numberOfRecords",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "recordsList",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const addr = "0x22f6D4bfb55B396f475017C0DF452E34C1268456";
web3 = new web3(new web3.providers.HttpProvider("https://eth-goerli.alchemyapi.io/v2/g5rpUpvN8EVa4q0r3trp-7HhAeAYP8e5"));
const contr = new web3.eth.Contract(abi, addr);

const send = "0x0Cf14535000340aE4d3cB01B5Cc6828e7F3DCC95";
const rec = "0xe356d87A284d2908DBFD79f6d67d34be2d461C92";

module.exports.testContract = function() {
	web3.eth.getAccounts().then(console.log);
	//contr.methods.getAllRecords().call({from: send}).then(console.log);
}

module.exports.deployContract = function(t, val) {
  const dat = {uuid: t, name: val};
  var callData = token.addRecord.getData(t, val);
  res = web3.eth.call({
    to: rec,
    data: callData
  });
  console.log(res);
}

module.exports.getContract = function(t) {
  HContr.findById(t, function(err, rec){
    if(!err)
    {
      return rec.name;
    }
  });
}
