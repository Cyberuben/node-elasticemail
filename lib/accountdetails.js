var xml = require("./xml");

module.exports = function AccountDetails() {
	return function (callback) {
		if(typeof callback == "undefined") throw new TypeError("callback is undefined");

		this.perform("GET", "/mailer/account-details", function (err, result) {
			if(err) {
				return callback(err);
			}

			xml.parseString(result, function (err, ad) {
				if(err) {
					return callback(err);
				}

				return callback(null, {
					credit: parseFloat(ad.credit),
					currency: ad.currency,
					reputation: parseInt(ad.reputation),
					pricePerEmail: parseFloat(ad.priceperemail),
					totalEmailsSent: parseInt(ad.totalemailssent),
					status: ad.status,
					accountType: ad.accounttype
				});
			});
		});
	}
}