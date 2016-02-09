var uniqueRandomArray = require('unique-random-array');
var countries = require('./countries.json');
var getRandomCountry = uniqueRandomArray(countries)

module.exports = {
	all: countries,
	random: getRandomCountries
};

function getRandomCountries (number) {

		var randomCountries = [];

		if (number === undefined) {
			return getRandomCountry();
		} else {
			for (var i = 0; i<number;i++) {
				randomCountries.push(getRandomCountry());
			}
		}

		return randomCountries
	}