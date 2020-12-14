'use strict';

const path = require('path');
const filename = path.basename(__filename, '.js');
const model = require('../models/' + filename);

module.exports = {
	/**
	* Call mongoDB for finding all the match to the request
	* @params {Object} find The matching parameters
	* @return {Question[]} Return an array of question
	**/
	get_all: (find) => {
		return model
			.find(find);
	},
	/**
	* Call mongoDb for finding all the question of a same level
	* @params {number} level The level of question searched
	* @params {number} limit The limit of question received
	* @return {Question[]} Return an array of question
	**/
	get_all_by_level: (level, limit = 20) => {
		return model.aggregate([
			{
				$lookup: {
					from: "level",
					localField: "level",
					foreignField: "_id",
					as: "level_populated"
				}
			},
			{
				$match: {
					"level_populated.level": level
				}
			}
		])
	}
};
