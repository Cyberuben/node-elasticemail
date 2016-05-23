var xml = require("./xml");

module.exports = function Status() {
	return function (jobId, options, callback) {
		if(typeof options == "function") {
			callback = options;
			options = {};
		}
		if(typeof callback == "undefined") throw new TypeError("callback is undefined");

		this.perform("GET", "/mailer/status/"+jobId, options, function (err, result) {
			if(err) {
				return callback(err);
			}

			console.log(result);

			xml.parseString(result, function (err, status) {
				if(err) {
					return callback(err);
				}

				return callback(null, status);
			});
		});
	}
}