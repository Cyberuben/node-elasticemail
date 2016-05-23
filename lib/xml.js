var xml2js = require("xml2js");

var parser = new xml2js.Parser({
	explicitRoot: false,
	ignoreAttrs: false,
	mergeAttrs: true,
	explicitArray: false
});

module.exports = parser;