'use strict';

const { gql } = require('apollo-server-fastify');

module.exports = gql`
	type Query  {
		get_all_questions: [Question]!
		get_all_questions_by_topics(topics: [String]): [Question]!
		get_random_questions(limit: Int): [Question]!
		get_all_topics: [Topic]!
		count_total_questions: Int
	}
`
