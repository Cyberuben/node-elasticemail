var async = require("async");

class Domain {
	constructor(client) {
		this.client = client;
	}

	add(domain, callback) {
		this.client.perform("GET", "/domain/add", {domain: domain}, callback);
	}

	delete(domain, callback) {
		this.client.perform("GET", "/domain/delete", {domain: domain}, callback);
	}

	list(callback) {
		this.client.perform("GET", "/domain/list", callback);
	}

	default(domain, callback) {
		this.client.perform("GET", "/domain/setdefault", {domain: domain}, callback);
	}

	verify(domain, type, callback) {
		if(typeof type == "function") {
			callback = type;
			type = null;
		}

		var endpoint = "";
		switch(type) {
			case "dkim":
				endpoint = "/domain/verifydkim";
			break;
			case "mx":
				endpoint = "/domain/verifymx";
			break;
			case "spf":
				endpoint = "/domain/verifyspf";
			break;
			case "tracking":
				endpoint = "/domain/verifytracking";
			break;
			default:
				endpoint = {
					dkim: "/domain/verifydkim",
					mx: "/domain/verifymx",
					spf: "/domain/verifyspf",
					tracking: "/domain/verifytracking"
				};
		}

		if(typeof endpoint != "string") {
			async.map(endpoint, function (endpoint, callback) {
				this.client.perform("GET", endpoint, {domain: domain}, function (err, result) {
					if(err) {
						return callback(null, false);
					}

					return callback(null, true);
				});
			}.bind(this), function (err, result) {
				return callback(result);
			});
		}else{
			this.client.perform("GET", endpoint, {domain: domain}, function (err, result) {
				if(err) {
					return callback(false);
				}

				return callback(true);
			});
		}
	}
}

module.exports = Domain;