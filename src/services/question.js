'use strict';

/**
* Manage the services for the question model
**/
module.exports = dbs => ({
	/**
	* Get all the questions
	* @return {Question[]} Return an array of question 
	**/
	get_all: async () => {
		return dbs.get_all({});
	}
});
