class Account {
	constructor(client) {
		this.client = client;
	}

	load(callback) {
		this.client.perform("GET", "/account/load", function (err, result) {
			console.log(err, result);
		});
	}
}

module.exports = Account;