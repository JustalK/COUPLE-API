'use strict';

const { gql } = require('apollo-server-fastify');

module.exports = gql`
	type Query  {
		get_all_questions: [Question]!
		get_all_questions_by_level(level: Int): [Question]!
		get_all_levels: [Level]!
	}
`
