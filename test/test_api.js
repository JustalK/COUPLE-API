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

test('[STATIC] Testing the get_all_questions_by_level', async t => {
	const response = await m_utils.getter({ query: `
		query {
			get_all_questions_by_level(level: 0) {
				question
			}
		}`
	});

	t.is(response.get_all_questions_by_level.length, 2);
	t.is(response.get_all_questions_by_level[0].question, 'Do you think you’re a good kisser?');
	t.is(response.get_all_questions_by_level[1].question, 'What kind of outfit would you look like me to wear?');
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

	t.is(response.get_all_questions.length, 25);
});
