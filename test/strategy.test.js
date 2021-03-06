/* global describe, it, expect */

require('./bootstrap/node');

var Strategy = require('../lib/strategy');


describe('Strategy', function () {

	var strategy = new Strategy(function () {
	});

	it('should be named local', function () {
		expect(strategy.name).to.equal('local-generic');
	});

	it('should throw if constructed without a verify callback', function () {
		expect(function () {
			var s = new Strategy();
		}).to.throw(TypeError, 'LocalStrategy requires a verify callback');
	});

});
