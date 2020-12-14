'use strict';

module.exports = {
	/**
	* Return the mode of node or affect one if none has been given
	* @params {string} node_env The mode of node
	* @return {string} The mode of node
	**/
	mode: node_env => {
		return node_env !== undefined ? node_env : 'production';
	},
	promisify: query => {
		return new Promise((resolve, reject) => {
			query.exec((err, data) => {
				if (err) reject(err);
				else resolve(data);
			});
		})
	}
};