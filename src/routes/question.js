'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');

async function routes (server, options) {
	const dbs = require('../dbs/' + filename)(server);
	const services = require('../services/' + filename)(dbs);

	/**
	* Get all questions
	**/
	server.get('/questions', async (request, reply) => {
		const datas = await services.get_all();
		return datas;
	})
}

module.exports = routes
