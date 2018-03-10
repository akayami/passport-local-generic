
require('./bootstrap/node');
var chai = require('chai');

var parseObjectNotatrion = require('../lib/utils').parseObjectNotatrion;


describe('Must parse field name', function() {

	it("Needs to find fields", function() {
		var v = parseObjectNotatrion('username');
		expect(v).equal('username');
	});

	it("Needs to find fields 2", function() {
		var v = parseObjectNotatrion('user[field]');
		expect(v).equal('field');
	})

});