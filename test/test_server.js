const test = require('ava');
const m = require('../src/server');

test('[STATIC] Testing errors with error', t => {
	try {
		m.errors('Error');
		t.fail();
	} catch {
		t.is(true, true)
	}
});
