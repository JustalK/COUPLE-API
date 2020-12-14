const { gql } = require('apollo-server-fastify');

module.exports = gql`
	type Query  {
		questions: [Question]!
	}
`
