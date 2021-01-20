const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
    }
    
    calculateHash() {
        return SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }
};

class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
       return new Block(0, new Date(), 'Genesis Block', '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock); 
    }

    isChainValid() {
        for(let i=1; i<this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            // checking if the data has been modified => then its hash will change
            if(currentBlock.hash !== currentBlock.calculateHash()) {
                return false;
            } 

            // Checking if chain hasn't been broken
            if(currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        // chain is valid
        return true;
    }

};

let minimalChain = new BlockChain();
minimalChain.addBlock(new Block(1, new Date(), {amount: 379}));
minimalChain.addBlock(new Block(2, new Date(), {amount: 1000}));

console.log(JSON.stringify(minimalChain, null, 4));
console.log('Is Blockchain Valid? :',minimalChain.isChainValid());

minimalChain.chain[1].data.amount = 400;

console.log(JSON.stringify(minimalChain, null, 4));
console.log('Is Blockchain Valid? :',minimalChain.isChainValid());
