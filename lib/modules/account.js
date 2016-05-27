var moment = require("moment");

class Account {
	constructor(client) {
		this.client = client;
	}

	addSubAccount(options, callback) {
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

	load(callback) {
		this.client.perform("GET", "/account/load", callback);
	}

	loadAdvancedOptions(callback) {
		this.client.perform("GET", "/account/loadadvancedoptions", callback);
	}

	loadEmailCreditsHistory(callback) {
		this.client.perform("GET", "/account/loademailcreditshistory", callback);
	}

	loadLitmusCreditsHistory(callback) {
		this.client.perform("GET", "/account/loadlitmuscreditshistory", callback);
	}

	loadNotificationQueue(callback) {
		this.client.perform("GET", "/account/loadnotificationqueue", callback);
	}

	loadPaymentHistory(options, callback) {
		this.client.perform("GET", "/account/loadpaymenthistory", options, callback);
	}

	loadPayoutHistory(callback) {
		this.client.perform("GET", "/account/loadpayouthistory", callback);
	}

	loadReferralDetails(callback) {
		this.client.perform("GET", "/account/loadreferraldetails", callback);
	}

	loadReputationHistory(options, callback) {
		this.client.perform("GET", "/account/loadreputationhistory", options, callback);
	}

	loadReputationImpact(callback) {
		this.client.perform("GET", "/account/loadreputationimpact", callback);
	}

	loadSpamCheck(options, callback) {
		this.client.perform("GET", "/account/loadspamcheck", options, callback);
	}

	loadSubAccountsEmailCreditsHistory(options, callback) {
		this.client.perform("GET", "/account/loadsubaccountsemailcreditshistory", options, callback);
	}

	loadSubAccountSettings(options, callback) {
		this.client.perform("GET", "/account/loadsubaccountsettings", options, callback);
	}

	loatSubAccountsLitmusCreditsHistory(options, callback) {
		this.client.perform("GET", "/account/loadsubaccountslitmuscreditshistory", options, callback);
	}

	loadUsage(options, callback) {
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