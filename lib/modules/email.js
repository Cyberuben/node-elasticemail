class Email {
	constructor(client) {
		this.client = client;
	}

	status(options, callback) {
		this.client.perform("GET", "/email/getstatus", options, callback);
	}

	send(options, callback) {
		this.client.perform("POST", "/email/send", options, callback);
	}

	view(messageId, callback) {
		this.client.perform("GET", "/email/view", {msgID: messageId}, callback);
	}

	retry(messageId, callback) {
		this.client.perform("GET", "/log/retrynow", {msgID: messageId}, callback);
	}

	cancel(options, callback) {
		this.client.perform("GET", "/log/cancelinprogress", options, callback);
	}
}

module.exports = Email;