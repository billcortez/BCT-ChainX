const Block = require('./block');
const crypto = require('crypto');

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()]; // Initialize the blockchain with the genesis block
    }

    createGenesisBlock() {
        return new Block(0, "0", Date.now(), "Genesis Block", this.calculateHash(0, "0", Date.now(), "Genesis Block"));
    }

    calculateHash(index, previousHash, timestamp, data) {
        return crypto.createHash('sha256').update(index + previousHash + timestamp + JSON.stringify(data)).digest('hex');
    }

    addBlock(data) {
        const previousBlock = this.chain[this.chain.length - 1]; // Get the last block in the chain
        const newIndex = previousBlock.index + 1; // Calculate the index for the new block
        const newTimestamp = Date.now(); // Get the current timestamp
        const newHash = this.calculateHash(newIndex, previousBlock.hash, newTimestamp, data); // Calculate the hash for the new block
        const newBlock = new Block(newIndex, previousBlock.hash, newTimestamp, data, newHash); // Create the new block
        this.chain.push(newBlock); // Add the new block to the chain
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) { // Start from the second block
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            // Check the hash of the current block
            if (currentBlock.hash !== this.calculateHash(currentBlock.index, currentBlock.previousHash, currentBlock.timestamp, currentBlock.data)) {
                return false; // Invalid hash
            }

            // Check the previous hash
            if (currentBlock.previousHash !== previousBlock.hash) {
                return false; // Invalid previous hash
            }
        }
        return true; // The chain is valid
    }
}

module.exports = Blockchain;
