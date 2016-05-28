class Sms {
	constructor(client) {
		this.client = client;
	}

	send(options, callback) {
		this.client.perform("GET", "/sms/send", options, callback);
	}
}

module.exports = Sms;