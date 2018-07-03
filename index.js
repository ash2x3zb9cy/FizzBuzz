// finds the first word beginning with B in an array, and puts a Fezz before it
function insertFezz(array) {
	// finds the first index of a word starting with B	
	let i = array.findIndex(x => x.startsWith('B'));
	if(i === -1) i = array.length;
	
	// insert at specific index
	array.splice(i, 0, 'Fezz');
}

// map of number to transformation. arguments to functions are array of words (eg ['Fizz, 'Buzz'])
const allRules = [
	[3, (x) => x.push('Fizz')],
	[5, (x) => x.push('Buzz')],
	[7, (x) => x.push('Bang')],
	[11, (x) => x.splice(0, x.length, 'Bong')],
	[13, insertFezz],
	[17, (x) => x.reverse()],
];

// builds a set of rules to use from args
const rules = [];
let argv = process.argv.slice(2).map(x => parseInt(x, 10));
for(let i = 0; i < argv.length; i++) {
	const number = argv[i];
	let rule = allRules.find(x => x[0] === number);
	if(rule) rules.push(rule);
}

// calculates the output for one number and returns it
function fizzBuzz(number) {
	const output = [];
	for(let i = 0; i < rules.length; i++) {
		let rule = rules[i];
		if(number % rules[i][0] === 0) rules[i][1](output);
	}
	if(output.length === 0) output.push(number.toString());
	return output.join('');
}

// loops the game from min to max and outputs
function fizzBuzzLoop(min, max) {
	for(let i = min; i <= max; i++) {
		console.log(fizzBuzz(i));
	}
}

const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});



// prompts the user for max and runs the game
rl.question('Choose a maximum number: ', (x) => {
	fizzBuzzLoop(1, parseInt(x, 10));
	rl.close();
});
