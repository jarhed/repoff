var uniqueRandomArray = require('unique-random-array');
var countries = require('./countries.json');

module.exports = {
	all: countries,
	random: uniqueRandomArray(countries)
};