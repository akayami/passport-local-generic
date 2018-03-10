/* global describe, it, expect */

require('./bootstrap/node');

var strategy = require('..');

describe('passport-local', function () {

	it('should export Strategy constructor directly from package', function () {
		expect(strategy).to.be.a('function');
		expect(strategy).to.equal(strategy.Strategy);
	});

});
