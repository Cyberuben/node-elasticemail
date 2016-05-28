var moment = require("moment");

class Log {
	constructor(client) {
		this.client = client;
	}

	trackLinks(options, callback) {
		if(options.hasOwnProperty("from") && options.from instanceof Date) {
			options.from = moment(options.from).format("YYYY-MM-DDTHH:mm:ss");
		}

		if(options.hasOwnProperty("to") && options.to instanceof Date) {
			options.to = moment(options.to).format("YYYY-MM-DDTHH:mm:ss");
		}
		this.client.perform("GET", "/log/linktracking", options, callback);
	}

	get(options, callback) {
		if(options.hasOwnProperty("from") && options.from instanceof Date) {
			options.from = moment(options.from).format("YYYY-MM-DDTHH:mm:ss");
		}

		if(options.hasOwnProperty("to") && options.to instanceof Date) {
			options.to = moment(options.to).format("YYYY-MM-DDTHH:mm:ss");
		}
		this.client.perform("GET", "/log/load", options, callback);
	}

	summary(options, callback) {
		if(options.hasOwnProperty("from") && options.from instanceof Date) {
			options.from = moment(options.from).format("YYYY-MM-DDTHH:mm:ss");
		}

		if(options.hasOwnProperty("to") && options.to instanceof Date) {
			options.to = moment(options.to).format("YYYY-MM-DDTHH:mm:ss");
		}
		this.client.perform("GET", "/log/summary", options, callback);
	}
}

module.exports = Log;