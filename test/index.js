'use strict';

const WatcherNonInterruptibleError = require('../').WatcherNonInterruptibleError;
const expect = require('chai').expect;
const VError = require('verror');
const sprintf = require('extsprintf').sprintf;

describe('WatcherNonInterruptibleError', function() {
	it('should throw WatcherNonInterruptibleError and to be instanceOf it', function() {
		expect(function() {
			try {
				throw new WatcherNonInterruptibleError(new Error('upper level'), 'lower level');
			}
			catch (error) {
				throw new WatcherNonInterruptibleError('non-fatal error');
			}

		})
			.to.be.throw(WatcherNonInterruptibleError)
			.and
			.to.be.instanceof(WatcherNonInterruptibleError);
	});
});