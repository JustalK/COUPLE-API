'use strict';

const { gql } = require('apollo-server-fastify');

module.exports = gql`
	type Topic {
		name: String
		icon: String
		source: String
	}
`
