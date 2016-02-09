var expect = require('chai').expect;
var observice = require('./observice');

describe('observice', function () {
	describe('all', function () {
		it('should be an array of objects', function () {
			expect(observice.all).to.satisfy(isArrayOfObjects);

			function isArrayOfObjects (array) {
				return array.every(function (item) {
					return typeof item === 'object';
				});
			}
		});
	});

	describe('random', function () {
		it('should return a random item', function () {
			var country = observice.random();

			expect(observice.all).to.include(country);
		});
	});
});