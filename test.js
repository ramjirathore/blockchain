
const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(3, 'EIUF44348927359HK', 'K89834HLK3543JSFJK');

bitcoin.createNewTransaction(300, 'aaa111', 'bbb111');

bitcoin.createNewBlock(3564, 'EIUF44348927359HK', 'K89834HLK3543JSFJK');

bitcoin.createNewTransaction(300, 'ccc111', 'ddd111');

bitcoin.createNewTransaction(400, 'eee111', 'fff111');

bitcoin.createNewTransaction(500, 'ggg111', 'hhh111');


console.log(bitcoin);
console.log(bitcoin.chain[0]);

