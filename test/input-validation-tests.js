const assert = require('assert');
const getStateRetirementDate = require('../src/get-state-pension-date').getStatePensionDate;

describe('getStateRetirementDate', () => {
	// Invalid year
	it('should return \'undefined\' when a DOB of 195-12-05 is supplied with \'M\'', () => {
		assert.equal(undefined, getStateRetirementDate('195-12-05', 'M'));
	});

	it('should return \'undefined\' when a DOB of 19521205 is supplied with \'M\'', () => {
		assert.equal(undefined, getStateRetirementDate('19521205', 'M'));
	});

	it('should return \'undefined\' when a DOB of 1952-12-05 is supplied with \'N\'', () => {
		assert.equal(undefined, getStateRetirementDate('1952-12-05', 'N'));
	});

	it('should return \'undefined\' when a DOB of -- is supplied with \'F\'', () => {
		assert.equal(undefined, getStateRetirementDate('--', 'F'));
	});

	it('should return \'undefined\' when a DOB of 1960/01/01 is supplied with \'F\'', () => {
		assert.equal(undefined, getStateRetirementDate('1960/01/01', 'F'));
	});

	it('should return \'undefined\' when a DOB of 02-08-1999 is supplied with \'F\'', () => {
		assert.equal(undefined, getStateRetirementDate('02-08-1999', 'F'));
	});

	it('should return \'undefined\' when a DOB of 1990-02-30 is supplied with \'M\'', () => {
		assert.equal(undefined, getStateRetirementDate('1990-02-30', 'M'));
	});

	it('should return \'undefined\' when a DOB of 2017-02-29 is supplied with \'M\'', () => {
		assert.equal(undefined, getStateRetirementDate('2017-02-29', 'M'));
	});

	// Without a gender, we can't be expected to match a rule
	it('should return \'undefined\' when a DOB of 1952-12-05 is supplied without gender', () => {
		assert.equal(undefined, getStateRetirementDate('1952-12-05'));
	});

	// Without a gender, we can't be expected to match a rule
	it('should return \'undefined\' when a DOB of 1950-04-05 is supplied with \'\'', () => {
		assert.equal(undefined, getStateRetirementDate('1952-12-05', ''));
	});
});
