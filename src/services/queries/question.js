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
	* Services for getting all the question for topics specified
	* @params {Object} parent The return value of the resolver (not needeed here)
	* @params {Object} args The argument passed to the function
	**/
	get_all_questions_by_topics: async (parent, args) => {
		return dbs.get_all_by_topics(args.topics);
	},
	/**
	* Services for getting random questions for topics specified
	* @params {Object} parent The return value of the resolver (not needeed here)
	* @params {Object} args The argument passed to the function
	**/
	get_random_questions_by_topics: async (parent, args) => {
		return dbs.get_random_by_topics(args.topics, args.limit);
	},
	/**
	* Services for getting x random questions
	* @params {Object} parent The return value of the resolver (not needeed here)
	* @params {Object} args The argument passed to the function
	**/
	get_random_questions: async (parent, args) => {
		return dbs.get_all_shuffle(args.limit);
	},
	/**
	* Services for counting the number of question
	**/
	count_total_questions: async () => {
		return dbs.count({});
	}
};
