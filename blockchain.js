function User(firstName, lastName, age, gender) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.age = age;
	this.gender = gender;
}

var user = new User('ramji', 'rathore', 22, 'male');

User.prototype.emaildomain = 'rmj@gmail.com';

User.prototype.getemailaddress = function () {
	return this.firstName + ' ' + this.lastName + ' ' + this.emaildomain;
};

console.log(user.getemailaddress());


function Blockchain() {
	this.chain = [];
	this.pendingTransactions = [];
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, Hash) {
	const newBlock = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.pendingTransactions,
		nonce,
		hash: Hash,
		previousBlockHash
	};

	this.previousBlockHash = [];
	this.chain.push(newBlock);

	return newBlock;
};

Blockchain.prototype.getLastBlock = () => {
	return this.chain[this.chain.length - 1];
};

Blockchain.prototype.createNewTransaction = (amount, sender, recepient) => {

	const newTransaction = { amount, sender, recepient };

	this.pendingTransactions.push(newTransaction);

	return this.getLastBlock()['index'] + 1;
};


module.exports = Blockchain;