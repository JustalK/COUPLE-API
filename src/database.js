'use strict'

const fastify_plugin = require('fastify-plugin')

module.exports = {
	/**
	* Create the function for registering the database MongoDB
	* @params {fastify} server The server fastify
	* @params {Object} options The options associated to the database
	**/
	register_database: async (server, options) => {
		server.register(require('fastify-mongodb'), {
			url: 'mongodb://localhost:27017/test_database'
		})
	},
	/**
	* Return the connector to the database
	* @return {Object} The fastify plugin
	**/
	connector: () => {
		return fastify_plugin(module.exports.register_database);
	}
}
