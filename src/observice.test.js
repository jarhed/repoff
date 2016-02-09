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

		it('should return an array if given a number', function () {

			var randomItems = observice.random(3);

			expect(randomItems).to.have.length(3);

			randomItems.forEach(function (item) {
				expect(observice.all).to.include(item);
			});

		});
	});
});