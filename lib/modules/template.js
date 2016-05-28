class Template {
	constructor(client) {
		this.client = client;
	}

	create(options, callback) {
		this.client.perform("POST", "/template/add", options, callback);
	}

	usage(templateId, callback) {
		this.client.perform("GET", "/template/checkusage", {templateID: templateId}, callback);
	}

	copy(options, callback) {
		this.client.perform("GET", "/template/copy", options, callback);
	}

	delete(templateId, callback) {
		this.client.perform("GET", "/template/delete", {templateID: templateId}, callback);
	}

	embeddedHtml(templateId, callback) {
		this.client.perform("GET", "/template/getembeddedhtml", {templateID: templateId}, callback);
	}

	list(options, callback) {
		this.client.perform("GET", "/template/getlist", options, callback);
	}

	details(templateId, callback) {
		this.client.perform("GET", "/template/loadtemplate", {templateID: templateId}, callback);
	}

	removeScreenshot(templateId, callback) {
		this.client.perform("GET", "/template/removescreenshot", {templateID: templateId}, callback);
	}

	saveScreenshot(templateId, callback) {
		this.client.perform("GET", "/template/savescreenshot", {templateID: templateId}, callback);
	}

	update(options, callback) {
		this.client.perform("POST", "/template/update", options, callback);
	}
}

module.exports = Template;