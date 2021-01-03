'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../../dbs/' + filename);

/**
* Manage the queries for the topic model
**/
module.exports = {
	/**
	* Get all the topics
	**/
	get_all_topics: async () => {
		return dbs.get_all({});
	}
};
