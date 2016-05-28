# node-elasticemail

A Elastic Email API wrapper for Node.js. Official API documentation can be found at [http://api.elasticemail.com/public/help](http://api.elasticemail.com/public/help), however, since a horribly configured `robots.txt`, this documentation does not show up on search engines.

Using this module, I'll trying to make working with the API more consistent (using `create` instead of `add`, except when really adding something, such as credit), make sure you don't have to worry about the HTTP-method and make sure I handle responses properly.

# Installation

Installation is very easy. 

```
npm i elastic-email
```

It has very few dependencies, so installation should be quick as well. If you feel like my dependencies are too resource heavy or could be done better, feel free to replace the currently used modules with your own alternatives and I'll see if I will accept your pull request.

# Getting started

To start using the module, all you have to do is use the following piece of code:

```
var elastic = require("elastic-email");

var client = elastic.createClient({
	apiKey: "a-working-api-key",
	// include the following if you want to override the default base path (https://api.elasticemail.com/v2)
	host: "https://your.ownimplementation.com"
});
```

After configuring the `client`, you can access all the modules (as defined by the Elastic Email API) by simply accessing them like `client.email.send`. Most functions are named after their API endpoints but converted to `lowerCamelCase`. Some API endpoints really made no sense to me so I decided to give them another name in the wrapper. Once the documentation is online, all these things should be trivial to find.

# Todo

* I still have to write a lot of documentation (I'm struggling with JSDoc3, help is very much appriciated). I'm aiming for a properly generated API documentation that allows you to understand how the API wrapper work without having to read the source or browse through 4 pages of documentation
* Write tests to make sure changes don't break the module
* Write code examples to make life a bit easier for some people

# Contributing

Since this is the first publicly released plugin I've written so far, I'm sure I have done things wrong or could have done better. I am completely open to changes, but for the sake of learning, please include why you'd suggest the changes.