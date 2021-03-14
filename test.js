
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

const previousBlockHash = 'KABH6788BJKJLH89897';

const currentBlockData = [
	{

		amount: 10,
		sender: 'sdkjjns344',
		recepeint: 'sdkjnsk3983'
	},
	{
		amount: 20,
		sender: 'sdkjjns344',
		recepeint: 'sdkjnsk3983'
	},
	{
		amount: 30,
		sender: 'sdkjjns344',
		recepeint: 'sdkjnsk3983'
	}
];
const nonce = 100;

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));
console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));

// bitcoin.createNewBlock(3, 'EIUF44348927359HK', 'K89834HLK3543JSFJK');

// bitcoin.createNewTransaction(300, 'aaa111', 'bbb111');

// bitcoin.createNewBlock(3564, 'EIUF44348927359HK', 'K89834HLK3543JSFJK');

// bitcoin.createNewTransaction(300, 'ccc111', 'ddd111');

// bitcoin.createNewTransaction(400, 'eee111', 'fff111');

// bitcoin.createNewTransaction(500, 'ggg111', 'hhh111');


// console.log(bitcoin);
// console.log(bitcoin.chain[0]);

