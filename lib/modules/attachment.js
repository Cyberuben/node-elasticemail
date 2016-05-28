class Attachment {
	constructor(client) {
		this.client = client;
	}

	delete(options, callback) {
		this.client.perform("GET", "/attachment/delete", options, callback);
	}

	get(options, callback) {
		this.client.perform("GET", "/attachment/get", options, callback);
	}

	list(options, callback) {
		this.client.perform("GET", "/attachment/list", options, callback);
	}

	remove(options, callback) {
		this.client.perform("GET", "/attachment/remove", options, callback);
	}

	upload(options, callback) {
		this.client.perform("POST", "/attachment/upload", options, callback);
	}
}

module.exports = Attachment;