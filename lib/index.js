var ElasticClient = require("./client");

/** 
 * Create an Elastic Email API client
 *
 * @function createClient
 * @param {object} options 			- Options object
 * @param {string} options.apiKey 	- A valid Elastic Email API key
 * @param {string} [options.host="https://api.elasticemail.com/v2"]	- Override the default host
 * @returns {ElasticClient} client
 */
module.exports.createClient = function (options) {
	return new ElasticClient(options);
}