const test = require('ava');
const m = require('../src/libs/utils');

test('[STATIC] Testing mode with correct value', t => {
	const mode = m.mode('test');
	t.is(mode, 'test');
});

test('[STATIC] Testing mode without value', t => {
	const mode = m.mode(undefined);
	t.is(mode, 'production');
});
