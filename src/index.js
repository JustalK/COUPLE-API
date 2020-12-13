'use strict'

require('dotenv').config({path: './env/.env.production'});
const server = require('./server');

/**
* Entry point of the API
**/
module.exports = {
	/**
	* Start the API
	* @return {Promise<boolean>} Return true if the server has been started or else an error
	**/
	start: async () => {
		return await server.start(process.env.API_NAME, process.env.HOST, process.env.PORT);
	}
};
