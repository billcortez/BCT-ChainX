const Blockchain = require('./blockchain');

const myBlockchain = new Blockchain();

console.log('Adding block 1...');
myBlockchain.addBlock({ amount: 4 });
console.log(JSON.stringify(myBlockchain, null, 4));

console.log('Adding block 2...');
myBlockchain.addBlock({ amount: 10 });
console.log(JSON.stringify(myBlockchain, null, 4));

console.log('Is blockchain valid? ' + myBlockchain.isChainValid());
