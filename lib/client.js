var AccountDetails = require("./accountdetails");
var ActivityLog = require("./activitylog");
//var Attachments = require("./attachments");
//var BlockList = require("./blocklist");
//var Contacts = require("./contacts");
//var JobStatic = require("./jobstatic");
//var MassMail = require("./massmail");
var Send = require("./send");
var Status = require("./status");
var Request = require("./request");
//var Webhooks = require("./webhooks");

class ElasticClient extends Request {
	constructor(options) {
		super(options);

		this.accountDetails = AccountDetails.call(this);
		this.activityLog = ActivityLog.call(this);
		this.send = Send.call(this);
		this.status = Status.call(this);
	}
}

module.exports = ElasticClient;