'use strict';

const { gql } = require('apollo-server-fastify');

module.exports = gql`
	type Question {
		question: String
		topics: [Topic]
	}
`
