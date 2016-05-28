class Export {
	constructor(client) {
		this.client = client;
	}

	status(exportId, callback) {
		this.client.perform("GET", "/export/checkstatus", {publicExportID: exportId}, callback);
	}

	count(callback) {
		this.client.perform("GET", "/export/countbytype", callback);
	}

	delete(exportId, callback) {
		this.client.perform("GET", "/export/delete", {publicExportID: exportId}, callback);
	}

	list(options, callback) {
		this.client.perform("GET", "/export/list", options, callback);
	}
}

module.exports = Export;