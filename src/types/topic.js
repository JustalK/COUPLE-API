'use strict';

const { gql } = require('apollo-server-fastify');

module.exports = gql`
	type Topic {
		id: String
		name: String
		icon: String
		source: String
	}
`
