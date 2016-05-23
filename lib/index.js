var ElasticClient = require("./client");

module.exports.createClient = function (options) {
	return new ElasticClient(options);
}