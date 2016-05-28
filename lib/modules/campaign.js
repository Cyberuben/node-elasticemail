class Campaign {
	constructor(client) {
		this.client = client;
	}

	create(options, callback) {
		this.client.perform("GET", "/campaign/add", options, callback);
	}

	copy(options, callback) {
		this.client.perform("GET", "/campaign/copy", options, callback);
	}

	delete(options, callback) {
		this.client.perform("GET", "/campaign/delete", options, callback);
	}

	export(options, callback) {
		this.client.perform("GET", "/campaign/export", options, callback);
	}

	list(options, callback) {
		this.client.perform("GET", "/campaign/list", options, callback);
	}

	update(options, callback) {
		this.client.perform("GET", "/campaign/update", options, callback);
	}
}

module.exports = Campaign;