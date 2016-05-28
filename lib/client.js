var Request = require("./request");

var Account = require("./modules/account");
var Attachment = require("./modules/attachment");
var Campaign = require("./modules/campaign");
var Channel = require("./modules/channel");
var Contact = require("./modules/contact");
var Domain = require("./modules/domain");
var Email = require("./modules/email");
var Export = require("./modules/export");
var List = require("./modules/list");
var Log = require("./modules/log");
var Segment = require("./modules/segment");
var Sms = require("./modules/sms");
var Survey = require("./modules/survey");
var Template = require("./modules/template");

/**
 * The Elastic Email API Client
 *
 * @class ElasticClient
 * @implements Request
 */
class ElasticClient extends Request {
	/**
	 * The constructor for ElasticClient
	 * 
	 * @param {Object} options	- The options object passed to {@link createClient}
	 * @constructs ElasticClient
	 */
	constructor(options) {
		super(options);

		/**
		 * All API endpoints related to your account 
		 * @member {ElasticClient~Account} ElasticClient#account 
		 */
		this.account = new Account(this);

		/**
		 * All API endpoints related attachments 
		 * @member {ElasticClient~Attachment} ElasticClient#attachment 
		 */
		this.attachment = new Attachment(this);

		/**
		 * All API endpoints related to campaigns 
		 * @member {ElasticClient~Campaign} ElasticClient#campaign 
		 */	 
		this.campaign = new Campaign(this);

		/**
		 * All API endpoints related to channels 
		 * @member {ElasticClient~Channel} ElasticClient#channel 
		 */
		this.channel = new Channel(this);

		/**
		 * All API endpoints related to contacts 
		 * @member {ElasticClient~Contact} ElasticClient#contact 
		 */
		this.contact = new Contact(this);

		/**
		 * All API endpoints related to domains 
		 * @member {ElasticClient~Domain} ElasticClient#domain 
		 */
		this.domain = new Domain(this);

		/**
		 * All API endpoints related to emails 
		 * @member {Email} ElasticClient#email 
		 */
		this.email = new Email(this);
		
		/**
		 * All API endpoints related to exporting 
		 * @member {Export} ElasticClient#export 
		 */
		this.export = new Export(this);

		/**
		 * All API endpoints related to lists 
		 * @member {List} ElasticClient#list 
		 */
		this.list = new List(this);

		/**
		 * All API endpoints related to logs 
		 * @member {Log} ElasticClient#log 
		 */
		this.log = new Log(this);
		
		/**
		 * All API endpoints related to segments
		 * @member {Segment} ElasticClient#segment 
		 */
		this.segment = new Segment(this);
		
		/**
		 * All API endpoints related to sending SMS messages 
		 * @member {Sms} ElasticClient#sms 
		 */
		this.sms = new Sms(this);
		
		/**
		 * All API endpoints related to surveys 
		 * @member {Survey} ElasticClient#survey 
		 */
		this.survey = new Survey(this);

		/**
		 * All API endpoints related to templates 
		 * @member {Template} ElasticClient#template 
		 */
		this.template = new Template(this);
	}
}

module.exports = ElasticClient;