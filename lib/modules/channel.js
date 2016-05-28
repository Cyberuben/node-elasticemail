class Channel {
	constructor(client) {
		this.client = client;
	}

	create(options, callback) {
		this.client.perform("GET", "/channel/add", options, callback);
	}

	delete(options, callback) {
		this.client.perform("GET", "/channel/delete", options, callback);
	}

	export(format, options, callback) {
		if(typeof format == "object") {
			callback = options;
			options = format;
			format = null;
		}

		switch(format) {
			case "csv":
				this.client.perform("GET", "/channel/exportcsv", options, callback);
			break;
			case "xml":
				this.client.perform("GET", "/channel/exportxml", options, callback);
			break;
			default:
				this.client.perform("GET", "/channel/exportjson", options, callback);
			break;
		}
	}

	list(callback) {
		this.client.perform("GET", "/channel/list", callback);
	}

	update(options, callback) {
		this.client.perform("GET", "/channel/update", options, callback);
	}
}

module.exports = Channel;