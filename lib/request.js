var request = require("request");

class Request {
	constructor(options) {
		options = options || {};

		if(!options.username) {
			throw new TypeError("'username' is a required parameter");
		}else{
			this.username = options.username;
		}
		if(!options.apiKey) {
			throw new TypeError("'apiKey' is a required parameter");
		}else{
			this.apiKey = options.apiKey;
		}
		this.host = options.host || "https://api.elasticemail.com";
	}

	perform(method, endpoint, data, callback) {
		var allowedMethods = ["GET", "POST", "PUT"];
		method = method.toUpperCase();
		if(allowedMethods.indexOf(method) == -1) {
			throw new TypeError("'method' is invalid and must be one of '"+allowedMethods.join("', '")+"'");
		}

		if(typeof data == "function") {
			callback = data;
			data = {};
		}else{
			data = data || {};
		}

		data.api_key = this.apiKey;
		data.username = this.username;

		var options = {
			method: method,
			url: this.host + endpoint
		}

		if(method == "POST" || method == "PUT") {
			options.form = data;
		}else{
			options.qs = data;
		}

		if(data.compress) {
			options.encoding = null;
		}

		request(options, function (err, res, body) {
			return callback(err, body);
		});
	}
}

module.exports = Request;