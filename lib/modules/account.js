var moment = require("moment");

/**
 * Account API wrapper
 * @class ElasticClient~Account
 * @memberof ElasticClient
 */
class Account {
	/**
	 * The Account constructor
	 *
	 * @constructs ElasticClient~Account
	 */
	constructor(client) {
		this.client = client;
	}

	/**
	 * Create a sub account
	 * 
	 * @param {Object} options		- Options object
	 * @param {stringCallback} cb 	- Callback
	 */
	createSubAccount(options, callback) {
		this.client.perform("GET", "/account/addsubaccount", options, callback);
	}

	addSubAccountCredits(options, callback) {
		this.client.perform("GET", "/account/addsubaccountcredits", options, callback);
	}

	changeEmail(options, callback) {
		this.client.perform("GET", "/account/changeemail", options, callback);
	}

	changePassword(options, callback) {
		this.client.perform("GET", "/account/changepassword", options, callback);
	}

	deleteSubAccount(options, callback) {
		this.client.perform("GET", "/account/deletesubaccount", options, callback);
	}

	getSubAccountApiKey(options, callback) {
		this.client.perform("GET", "/account/getsubaccountapikey", options, callback);
	}

	getSubAccountList(callback) {
		this.client.perform("GET", "/account/getsubaccountlist", callback);
	}

	details(callback) {
		this.client.perform("GET", "/account/load", callback);
	}

	getAdvancedOptions(callback) {
		this.client.perform("GET", "/account/loadadvancedoptions", callback);
	}

	getEmailCreditsHistory(callback) {
		this.client.perform("GET", "/account/loademailcreditshistory", callback);
	}

	getLitmusCreditsHistory(callback) {
		this.client.perform("GET", "/account/loadlitmuscreditshistory", callback);
	}

	getNotificationQueue(callback) {
		this.client.perform("GET", "/account/loadnotificationqueue", callback);
	}

	getPaymentHistory(options, callback) {
		this.client.perform("GET", "/account/loadpaymenthistory", options, callback);
	}

	getPayoutHistory(callback) {
		this.client.perform("GET", "/account/loadpayouthistory", callback);
	}

	getReferralDetails(callback) {
		this.client.perform("GET", "/account/loadreferraldetails", callback);
	}

	getReputationHistory(options, callback) {
		this.client.perform("GET", "/account/loadreputationhistory", options, callback);
	}

	getReputationImpact(callback) {
		this.client.perform("GET", "/account/loadreputationimpact", callback);
	}

	getSpamCheck(options, callback) {
		this.client.perform("GET", "/account/loadspamcheck", options, callback);
	}

	getSubAccountsEmailCreditsHistory(options, callback) {
		this.client.perform("GET", "/account/loadsubaccountsemailcreditshistory", options, callback);
	}

	getSubAccountSettings(options, callback) {
		this.client.perform("GET", "/account/loadsubaccountsettings", options, callback);
	}

	getSubAccountsLitmusCreditsHistory(options, callback) {
		this.client.perform("GET", "/account/loadsubaccountslitmuscreditshistory", options, callback);
	}

	getUsage(options, callback) {
		if(options.hasOwnProperty("from") && options.from instanceof Date) {
			options.from = moment(options.from).format("YYYY-MM-DDTHH:mm:ss");
		}

		if(options.hasOwnProperty("to") && options.to instanceof Date) {
			options.to = moment(options.to).format("YYYY-MM-DDTHH:mm:ss");
		}
		this.client.perform("GET", "/account/loadusage", options, callback);
	}

	manageApiKeys(options, callback) {
		this.client.perform("GET", "/account/manageapikeys", options, callback);
	}

	overview(callback) {
		this.client.perform("GET", "/account/overview", callback);
	}

	removeSubAccountCredits(options, callback) {
		this.client.perform("GET", "/account/removesubaccountcredits", options, callback);
	}

	requestPrivateIp(options, callback) {
		this.client.perform("GET", "/account/requestprivateip", options, callback);
	}

	updateAdvancedOptions(options, callback) {
		this.client.perform("GET", "/account/updateadvancedoptions", options, callback);
	}

	updateCustomBranding(options, callback) {
		this.client.perform("GET", "/account/updatecustombranding", options, callback);
	}

	updateHttpNotification(options, callback) {
		this.client.perform("GET", "/account/updatehttpnotification", options, callback);
	}

	updateProfile(options, callback) {
		this.client.perform("GET", "/account/updateprofile", options, callback);
	}

	updateSubAccountSettings(options, callback) {
		this.client.perform("GET", "/account/updatesubaccountsettings", options, callback);
	}
}

module.exports = Account;