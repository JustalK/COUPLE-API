'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../dbs/' + filename);

/**
* Manage the services for the question model
**/
module.exports = {
	questions: async (parent, args, context, info) => {
		return dbs.get_all({});
	}
};
