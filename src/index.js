'use strict'

const utils = require('./libs/utils');
const mode = utils.mode(process.env.NODE_ENV);
require('dotenv').config({ path: './env/.env.' + mode });
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
