function insertFezz(array) {
	// finds the first index of a word starting with B	
	let i = array.findIndex(x => x.startsWith('B'));
	if(i === -1) i = array.length;
	
	// insert at specific index
	array.splice(i, 0, 'Fezz');
}

// We now need to specify an order to apply the transformations (see 17)
const rules = [
	[3, (x) => x.push('Fizz')],
	[5, (x) => x.push('Buzz')],
	[7, (x) => x.push('Bang')],
	[11, (x) => x.splice(0, x.length, 'Bong')],
	[13, insertFezz],
	[17, (x) => x.reverse()],
];

function fizzBuzz(number) {
	const output = [];
	for(let i = 0; i < rules.length; i++) {
		let rule = rules[i];
		if(number % rules[i][0] === 0) rules[i][1](output);
	}
	if(output.length === 0) output.push(number.toString());
	return output.join('');
}

for(let i = 1; i <= 255; i++) {
	console.log(fizzBuzz(i));
}
