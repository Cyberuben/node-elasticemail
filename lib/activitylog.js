var xml = require("./xml");

function formatDate(date) {
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var year = date.getFullYear();

	var hours = date.getHours();
	var ampm = "AM";
	if(hours > 11) {
		hours -= 12;
		ampm = "PM";
	}
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();

	return month+"/"+day+"/"+year+" "+hours+":"+minutes+":"+seconds+" "+ampm;
}

module.exports = function ActivityLog() {
	return function (options, callback) {
		if(typeof options == "function") {
			callback = options;
			options = {};
		}
		if(typeof callback == "undefined") throw new TypeError("callback is undefined");

		if(options.hasOwnProperty("format") && options.format == "csv") options.format = "xml";
		if(options.hasOwnProperty("from")) {
			if(options.from instanceof Date) {
				options.from = formatDate(options.from);
			}else if(typeof options.from != "string") {
				throw new TypeError("'from' is not a valid format (Date or string)");
			}
		}
		if(options.hasOwnProperty("to")) {
			if(options.to instanceof Date) {
				options.to = formatDate(options.to);
			}else if(typeof options.to != "string") {
				throw new TypeError("'to' is not a valid format (Date or string)");
			}
		}

		this.perform("GET", "/mailer/status/log", options, function (err, result) {
			if(err) {
				return callback(err);
			}

			console.log(result);

			if(options.compress) {
				return callback(null, result);
			}else{
				xml.parseString(result, function (err, log) {
					if(err) {
						return callback(err);
					}

					return callback(null, log);
				});
			}
		});
	}
}