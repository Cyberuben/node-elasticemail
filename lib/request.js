var request = require("request");

/**
 * The request class that is used to perform all queries
 *
 * @class Request
 * 
 * @param {Object} options	- Options object passed by {@link createClient}
 */
class Request {
	constructor(options) {
		options = options || {};

		if(!options.apiKey) {
			throw new TypeError("'apiKey' is a required parameter");
		}else{
			this.apiKey = options.apiKey;
		}
		this.host = options.host || "https://api.elasticemail.com/v2";
	}

	/**
	 * This is a Request callback and is returned by each API call issued to perform
	 *
	 * @callback Request~callback
	 * @param {Object} err		- A JavaScript error object with the error given by the API call
	 * @param {variable} [data]	- The data returned by the API call (if any)
	 */

	/**
	 * JSON response callback
	 *
	 * @callback Request~jsonCallback
	 * @param {Object} err		- A JavaScript error object with the error given by the API call
	 * @param {Object} jsonData	- Parsed JSON data
	 */

	/**
	 * String response callback
	 *
	 * @callback Request~stringCallback
	 * @param {Object} err		- A JavaScript error object with the error given by the API call
	 * @param {string} data		- A single string
	 */

	/**
	 * @memberof Request
	 *
	 * @param {string} method					- Method to call the API with (GET, POST or PUT)
	 * @param {string} endpoint					- The endpoint to call (appended to the API base path)
	 * @param {Object} [options]				- Form or query values to send with the request
	 * @param {Request~callback} [callback] 	- The callback that returns the error or data
	 */
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

		data.apikey = this.apiKey;

		var options = {
			method: method,
			url: this.host + endpoint
		}

		if(method == "POST" || method == "PUT") {
			options.form = data;
		}else{
			options.qs = data;
		}

		request(options, function (err, res, body) {
			if(callback) {
				if(err) {
					return callback(err);
				}

				if(res.statusMessage != "OK") {
					return callback(new Error(res.statusMessage));
				}
				
				try {
					var data = JSON.parse(body);
					if(data.error) {
						return callback(new Error(data.error));
					}
				} catch (err) {
					return callback(null, body);
				}

				return callback(null, data.data);
			}
		});
	}
}

module.exports = Request;