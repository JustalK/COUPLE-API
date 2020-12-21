'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');
const dbs = require('../../dbs/' + filename);

/**
* Manage the queries for the question model
**/
module.exports = {
	/**
	* Services for getting all the question
	**/
	get_all_questions: async () => {
		return dbs.get_all({});
	},
	/**
	* Services for getting all the question of the same level
	* @params {Object} parent The return value of the resolver (not needeed here)
	* @params {Object} args The argument passed to the function
	**/
	get_all_questions_by_level: async (parent, args) => {
		if(args.level === undefined) {
			throw new Error('The `level` argument is necessary here.');
		}

		return dbs.get_all_by_level(args.level, args.limit);
	},
	/**
	* Services for getting x random questions
	* @params {Object} parent The return value of the resolver (not needeed here)
	* @params {Object} args The argument passed to the function
	**/
	get_random_questions: async (parent, args) => {
		if(args.limit === undefined) {
			throw new Error('The `limit` argument is necessary here.');
		}

		return dbs.get_all_shuffle(args.limit);
	}
};
