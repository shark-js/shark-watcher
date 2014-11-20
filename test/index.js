'use strict';

const WatcherNonInterruptibleError = require('../').WatcherNonInterruptibleError;
const expect = require('chai').expect;
const VError = require('verror');

describe('WatcherNonInterruptibleError', function() {
	it('should be instanceOf VError', function() {
		expect(new WatcherNonInterruptibleError()).to.be.instanceof(VError);
	});

	it('should throw WatcherNonInterruptibleError and to be instanceOf it', function() {
		expect(function() {
			throw new WatcherNonInterruptibleError('non-fatal error');
		})
			.to.be.throw(WatcherNonInterruptibleError)
			.and
			.to.be.instanceof(WatcherNonInterruptibleError);
	});
});