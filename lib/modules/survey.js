class Survey {
	constructor(client) {
		this.client = client;
	}

	create(options, callback) {
		this.client.perform("GET", "/survey/add", options, callback);
	}

	delete(surveyId, callback) {
		this.client.perform("GET", "/survey/delete", {publicSurveyID: surveyId}, callback);
	}

	export(options, callback) {
		this.client.perform("GET", "/survey/export", options, callback);
	}

	list(callback) {
		this.client.perform("GET", "/survey/list", callback);
	}

	responses(surveyId, callback) {
		this.client.perform("GET", "/survey/loadresponselist", {publicSurveyID: surveyId}, callback);
	}

	summary(surveyId, callback) {
		this.client.perform("GET", "/survey/loadresults", {publicSurveyID: surveyId}, callback);
	}

	update(options, callback) {
		this.client.perform("GET", "/survey/update", options, callback);
	}
}

module.exports = Survey;