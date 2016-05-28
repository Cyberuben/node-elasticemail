class Segment {
	constructor(client) {
		this.client = client;
	}

	create(options, callback) {
		this.client.perform("GET", "/segment/add", options, callback);
	}

	delete(segmentName, callback) {
		this.client.perform("GET", "/segment/delete", {segmentName: segmentName}, callback);
	}

	list(includeHistory, callback) {
		if(typeof includeHistory == "function") {
			callback = includeHistory;
			includeHistory = false;
		}

		this.client.perform("GET", "/segment/list", {includeHistory: includeHistory}, callback);
	}

	update(options, callback) {
		this.client.perform("GET", "/segment/update", options, callback);
	}
}

module.exports = Segment;