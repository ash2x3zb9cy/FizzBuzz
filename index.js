const {calculate, ruleList, loop} = require('./fizzbuzz.js')

// builds a set of rules to use from args
const rules = [];
let argv = process.argv.slice(2).map(x => parseInt(x, 10));
for(let i = 0; i < argv.length; i++) {
	const number = argv[i];
	let rule = ruleList.find(x => x.number === number);
	if(rule) rules.push(rule);
}

const rl = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

// prompts the user for max and runs the game
rl.question('Choose a maximum number: ', (x) => {
	loop(1, parseInt(x, 10), rules);
	rl.close();
});
