'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');
const model = require('../models/' + filename);

module.exports = server => ({
	/**
	* Call mongoDB for finding all the match to the request
	* @params {Object} find The matching parameters
	* @return {Question[]} Return an array of question
	**/
	get_all: (find) => {
		return server.mongo.db.collection(filename)
			.find(find)
			.toArray();
	}
});
