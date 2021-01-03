'use strict';

const mongoose = require('mongoose');

module.exports = {
	/**
	* Return the mode of node or affect one if none has been given
	* @params {string} node_env The mode of node
	* @return {string} The mode of node
	**/
	mode: node_env => {
		return node_env !== undefined ? node_env : 'production';
	},
	array_id_to_array_mongoose_id: ids => {
		return ids.map(id => mongoose.Types.ObjectId(id));
	}
};
