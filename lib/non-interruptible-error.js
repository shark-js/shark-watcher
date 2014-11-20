'use strict';

const VError = require('verror');

function WatcherNonInterruptibleError() {
	this.constructor.prototype.__proto__ = VError.prototype;
	VError.apply(this, arguments);
	Error.captureStackTrace(this, this.constructor);
}

module.exports = WatcherNonInterruptibleError;