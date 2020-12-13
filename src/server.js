'use strict'

const database = require('./database');

/**
* This module take care of the server creation
**/
module.exports = {
	/**
	* Create the restify server
	* @return {fastify} A server restify without any routes
	**/
	create_server: () => {
		return require('fastify')({
			logger: true
		})
	},
	/**
	* Add routes to the fastify server
	* @params {fastify} server The fastify server
	* @params {string} filename_routes The name of the filename containing the routes
	**/
	adding_route: (server, filename_routes) => {
		server.register(require('./routes/' + filename_routes))
	},
	/**
	* Create the link between the database MongoDB and fastify server
	* @params {fastify} The fastify server to connect to the database
	**/
	connect_to_database: (server) => {
		server.register(database.connector());
	},
	/**
	* Start the server using the parameter
	* @params {string} name The name of the server
	* @params {string} host The host of the server
	* @params {string} port The port of the server
	* @return {Promise<boolean>} True if the server start or else an error
	**/
	start: async (name, host, port) => {
		const server = module.exports.create_server();

		module.exports.connect_to_database(server);
		module.exports.adding_route(server, 'app');
		module.exports.adding_route(server, 'question');

		return new Promise(async (resolve, reject) => {
			try {
				await server.listen(port);
				resolve(true);
			} catch (err) {
				server.log.error(err);
				process.exit(1);
			}
		});
	}
}
