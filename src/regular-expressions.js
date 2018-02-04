
(() => {
	// Named capture groups
	const pattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
	const result = pattern.exec('2018-01-31');
	console.log(result);
	// Supported in Chrome
	// result.groups.year === '2018'
	// result.groups.month === '01'
	// result.groups.day === '31'
})();

// Lookbehind assertions
(() => {
	// Positive lookahead:
	const pattern = /\w+(?= Mustermann)/u;
	const result = pattern.exec('Max Mustermann');
	console.log(result[0]);
	// result[0] === 'Max'
})();

/*
// Supported in Chrome from version 62
(() => {
	// Negative lookahead:
	const pattern = /\w+(?! Mustermann)/u;
	const result = pattern.exec('Max Defaultname');
	console.log(result[0]);
	// result[0] === 'Max'
})();

(() => {
	// Positive lookbehind:
	const pattern = /(?<=Max )\w+/u;
	const result = pattern.exec('Max Mustermann');
	console.log(result[0]);
	// result[0] === 'Mustermann'
})();

(() => {
	// Negative lookbehind:
	const pattern = /(?<!Max )\w+/u;
	const result = pattern.exec('Mustermann');
	console.log(result[0]);
	// result[0] === 'Mustermann'
})();
*/
