class Block {
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;                // Position of the block in the chain
        this.previousHash = previousHash;  // Hash of the previous block
        this.timestamp = timestamp;        // Creation time of the block
        this.data = data;                  // Information stored in the block
        this.hash = hash;                  // Unique hash of the current block
    }
}

module.exports = Block;
