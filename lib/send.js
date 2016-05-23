var validator = require("validator");

module.exports = function Send() {
	return function (options, callback) {
		callback = callback || function () {};
		if(!options.hasOwnProperty("from")) throw new TypeError("'from' is a required field");
		if(!validator.isEmail(options.from)) throw new TypeError("'from' is not a valid email address");
		if(!options.hasOwnProperty("to")) throw new TypeError("'to' is a required field");
		if(!options.to.split(",").every(email => validator.isEmail(email))) throw new TypeError("one of the 'to' emails is invalid");
		if(options.hasOwnProperty("reply_to") && !validator.isEmail(options.reply_to)) throw new TypeError("'reply_to' is not a valid email address");
		if(options.hasOwnProperty("reply_to_name") && !options.hasOwnProperty("reply_to")) throw new TypeError("'reply_to' not set but 'reply_to_name' is");
		if(options.hasOwnProperty("sender") && !validator.isEmail(options.sender))  throw new TypeError("'sender' is not a valid email address");
		if(options.hasOwnProperty("sender_name") && !options.hasOwnProperty("sender"))  throw new TypeError("'sender' not set but 'sender_name' is");

		this.perform("POST", "/mailer/send", options, function (err, jobId) {
			if(err) {
				return callback(err);
			}

			return callback(null, jobId);
		});
	}
}