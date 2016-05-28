class Contact {
	constructor(client) {
		this.client = client;
	}

	activateBlocked(options, callback) {
		if(options.emails && Array.isArray(options.emails)) {
			options.emails = option.emails.join(",");
		}

		this.client.perform("GET", "/contact/activateblocked", options, callback);
	}

	create(options, callback) {
		this.client.perform("GET", "/contact/add", options, callback);
	}

	addBlocked(options, callback) {
		this.client.perform("GET", "/contact/addblocked", options, callback);
	}

	changeProperty(options, callback) {
		this.client.perform("GET", "/contact/changeproperty", options, callback);
	}

	changeStatus(options, callback) {
		this.client.perform("GET", "/contact/changestatus", options, callback);
	}

	countByStatus(options, callback) {
		this.client.perform("GET", "/contact/countbystatus", options, callback);
	}

	delete(options, callback) {
		this.client.perform("GET", "/contact/delete", options, callback);
	}

	export(options, callback) {
		this.client.perform("GET", "/contact/export", options, callback);
	}

	list(options, callback) {
		this.client.perform("GET", "/contact/list", options, callback);
	}

	getBlocked(options, callback) {
		this.client.perform("GET", "/contact/loadblocked", options, callback);
	}

	get(options, callback) {
		this.client.perform("GET", "/contact/loadcontact", options, callback);
	}

	getHistory(options, callback) {
		this.client.perform("GET", "/contact/loadhistory", options, callback);
	}

	quickAdd(options, callback) {
		this.client.perform("GET", "/contact/quickadd", options, callback);
	}

	update(options, callback) {
		this.client.perform("GET", "/contact/update", options, callback);
	}

	upload(options, callback) {
		this.client.perform("POST", "/contact/upload", options, callback);
	}
}

module.exports = Contact;