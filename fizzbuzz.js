exports.calculate = function calculate(number, rules) {
	const output = [];
	for(let i = 0; i < rules.length; i++) {
		let rule = rules[i];
		if(number % rule.number === 0) rule.action(output);
	}
	if(output.length === 0) output.push(number.toString());
	return output.join('');
}

// finds the first word beginning with B in an array, and puts a Fezz before it
function insertFezz(array) {
	// finds the first index of a word starting with B	
	let i = array.findIndex(x => x.startsWith('B'));
	if(i === -1) i = array.length;
	
	// insert at specific index
	array.splice(i, 0, 'Fezz');
}

// map of number to transformation. arguments to functions are array of words (eg ['Fizz, 'Buzz'])
exports.ruleList = [
	{number: 3, action: (x) => x.push('Fizz')},
        {number: 5, action: (x) => x.push('Buzz')},
        {number: 7, action: (x) => x.push('Bang')},
        {number: 11, action: (x) => x.splice(0, x.length, 'Bong')},
        {number: 13, action: insertFezz},
        {number: 17, action: (x) => x.reverse()},
];

// loops the game from min to max and outputs
exports.loop = function loop(min, max, rules) {
	for(let i = min; i <= max; i++) {
		console.log(exports.calculate(i, rules));
	}
}