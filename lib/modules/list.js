class List {
	constructor(client) {
		this.client = client;
	}

	create(options, callback) {
		if(options.emails && Array.isArray(options.emails)) {
			options.emails = options.emails.join(",");
		}
		this.client.perform("GET", "/list/add", options, callback);
	}

	createNth(options, callback) {
		this.client.perform("GET", "/list/createnthselectionlists", options, callback);
	}

	createRandom(options, callback) {
		this.client.perform("GET", "/list/createrandomlist", options, callback);
	}

	addContact(options, callback) {
		if(options.emails && Array.isArray(options.emails)) {
			options.emails = options.emails.join(",");
		}
		this.client.perform("GET", "/list/addcontacts", options, callback);
	}

	removeContact(options, callback) {
		if(options.emails && Array.isArray(options.emails)) {
			options.emails = options.emails.join(",");
		}
		this.client.perform("GET", "/list/removecontacts", options, callback);
	}

	delete(listName, callback) {
		this.client.perform("GET", "/list/delete", {listName: listName}, callback);
	}

	list(callback) {
		this.client.perform("GET", "/list/list", callback);
	}

	details(listName, callback) {
		this.client.perform("GET", "/list/load", {listName: listName}, callback);
	}

	update(options, callback) {
		this.client.perform("GET", "/list/update", options, callback);
	}
}

List.addContacts = List.addContact;
List.removeContacts = List.removeContact;

module.exports = List;