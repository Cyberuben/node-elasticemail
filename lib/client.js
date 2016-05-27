var Request = require("./request");

var Account = require("./modules/account");

class ElasticClient extends Request {
	constructor(options) {
		super(options);

		this.account = new Account(this);
	}
}

module.exports = ElasticClient;