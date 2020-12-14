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
	t.is(response.get_all_questions_by_level[0].question, 'What do you think about living together ?');
	t.is(response.get_all_questions_by_level[1].question, 'What do you think about rrrr together ?');
});

test('[STATIC] Testing the get_all_questions', async t => {
	const response = await m_utils.getter({ query: `
		query {
			get_all_questions {
				question
			}
		}`
	});

	t.is(response.get_all_questions.length, 4);
	t.is(response.get_all_questions[0].question, 'What do you think about living together ?');
	t.is(response.get_all_questions[1].question, 'What do you think about rrrr together ?');
	t.is(response.get_all_questions[2].question, 'What do you think about dddd together ?');
	t.is(response.get_all_questions[3].question, 'What do you think about eeee together ?');
});
