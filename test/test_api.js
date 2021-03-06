require('dotenv').config({path: './env/.env.production'});
require('isomorphic-fetch');

const test = require('ava');
const m = require('../src');
const m_seeding = require('../seeding/seeder');
const m_utils = require('./libs/utils');

let server;

test.before(async () => {
	server = await m.start();
	await m_seeding.seed();
});

test('[STATIC] Testing the get_all_questions_by_topics', async t => {
	const response = await m_utils.getter({ query: `
		query {
			get_all_questions_by_topics(topics: ["5fd5b78efbc2f7a33c2cf001"]) {
				question
			}
		}`
	});

	t.is(response.get_all_questions_by_topics.length, 3);
	t.is(response.get_all_questions_by_topics[0].question, 'Do you think you’re a good kisser?');
	t.is(response.get_all_questions_by_topics[1].question, 'What kind of outfit would you look like me to wear?');
	t.is(response.get_all_questions_by_topics[2].question, 'What\'s your favorite part of my body?');
});

test('[STATIC] Testing the get_random_questions_by_topics', async t => {
	const response = await m_utils.getter({ query: `
		query {
			get_random_questions_by_topics(topics: ["5fd5b78efbc2f7a33c2cf001"], limit: 2) {
				question
			}
		}`
	});

	t.is(response.get_random_questions_by_topics.length, 2);
	t.not(response.get_random_questions_by_topics[0].question, undefined);
	t.not(response.get_random_questions_by_topics[1].question, undefined);
});

test('[STATIC] Testing the get_random_questions_by_topics without limit', async t => {
	const response = await m_utils.getter({ query: `
		query {
			get_random_questions_by_topics(topics: ["5fd5b78efbc2f7a33c2cf001"]) {
				question
			}
		}`
	});

	t.is(response.get_random_questions_by_topics.length, 3);
	t.not(response.get_random_questions_by_topics[0].question, undefined);
	t.not(response.get_random_questions_by_topics[1].question, undefined);
	t.not(response.get_random_questions_by_topics[2].question, undefined);
});

test('[STATIC] Testing the get_all_questions', async t => {
	const response = await m_utils.getter({ query: `
		query {
			get_all_questions {
				question
			}
		}`
	});

	t.is(response.get_all_questions.length, 25);
	t.is(response.get_all_questions[0].question, 'Do you think you’re a good kisser?');
	t.is(response.get_all_questions[1].question, 'What kind of outfit would you look like me to wear?');
	t.is(response.get_all_questions[2].question, 'What\'s your favorite part of my body?');
	t.is(response.get_all_questions[3].question, 'Do you touch yourself in the week?');
});

test('[STATIC] Testing the count_total_questions', async t => {
	const response = await m_utils.getter({ query: `
		query {
			count_total_questions
		}`
	});

	t.is(response.count_total_questions, 25);
});

test('[STATIC] Testing the get_random_questions', async t => {
	const response = await m_utils.getter({ query: `
		query {
			get_random_questions(limit: 2) {
				question
			}
		}`
	});

	t.is(response.get_random_questions.length, 2);
	t.not(response.get_random_questions[0].question, undefined);
	t.not(response.get_random_questions[1].question, undefined);
});

test('[STATIC] Testing the get_random_questions without params', async t => {
	const response = await m_utils.getter({ query: `
		query {
			get_random_questions {
				question
			}
		}`
	});

	t.is(response.get_random_questions.length, 20);
	t.not(response.get_random_questions[0].question, undefined);
	t.not(response.get_random_questions[1].question, undefined);
});

test('[STATIC] Testing mutator add_new_question', async t => {
	const count = await m_utils.getter({ query: `
		query {
			count_total_questions
		}`
	});

	t.is(count.count_total_questions, 25);

	const response = await m_utils.getter({ query: `
		mutation {
			add_new_question(question: "Test", topics: ["5fd5b78efbc2f7a33c2cf001"]) {
				question
			}
		}`
	});

	const count_after_adding = await m_utils.getter({ query: `
		query {
			count_total_questions
		}`
	});

	t.is(count_after_adding.count_total_questions, 26);
});

test('[STATIC] Testing the get all topics', async t => {
	const response = await m_utils.getter({ query: `
		query {
			get_all_topics {
				name
				icon
				source
			}
		}`
	});

	t.is(response.get_all_topics.length, 2);
	t.is(response.get_all_topics[0].name, 'Life');
	t.is(response.get_all_topics[0].icon, 'home');
	t.is(response.get_all_topics[0].source, 'font-awesome');
});
