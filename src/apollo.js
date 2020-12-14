'use strict'

const { ApolloServer, gql } = require('apollo-server-fastify');
const { makeExecutableSchema } = require('graphql-tools');
const fs = require('fs');

module.exports = {
	/**
	* Get all the types definition from the types directory
	* @return {gql} Return the one gql schema
	**/
	get_types: () => {
		const types = fs.readdirSync('src/types');
		const typeDefs = types.map(type => {
			return require('./types/' + type.split('.')[0]);
		});
		return typeDefs;
	},
	/**
	* Get the resolvers from the services directory
	* @return {Object} Return The resolver
	**/
	get_resolvers: () => {
		let queries = {};
		const services = fs.readdirSync('src/services');
		services.map(service => {
			queries = {...queries, ...require('./services/' + service.split('.')[0])};
		});
		const resolvers = {Query: queries};
		return resolvers;
	},
	/**
	* Create the excutable schema from the type deinition and resolver
	* @return {Object} Return the excutable schema for apollo
	**/
	create_schema: () => {
		const typeDefs = module.exports.get_types();
		const resolvers = module.exports.get_resolvers();

		const schema = makeExecutableSchema({typeDefs, resolvers});
		return schema;
	},
	/**
	* Create the apollo server
	* @params {Object} schema The excutable schema for apollo
	* @return {ApolloServer} The apollo server
	**/
	create_server: schema => {
		return new ApolloServer({
			schema
		});
	},
	/**
	* Create the handler to be use by fastify
	**/
	get_handler: () => {
		const schema = module.exports.create_schema();
		const server = module.exports.create_server(schema);

		return server.createHandler({
			path: '/api/graphql'
		})
	}
}
