const createArtist = (name, ...tags) => {
	console.log(name);
	// tags ist ein Array
	for (let tag of tags) {
		console.log(tag);
	}
	return {
		name,
		tags
	}
}

const artist = createArtist('The Doors', 'Retro', 'Rock');
// { name: 'The Doors', tags: [ 'Retro', 'Rock' ] }
console.log(artist);

const person = {
	firstName: 'Max',
	lastName: 'Mustermann',
	age: 33,
	hairColor: 'brown',
	height: 1.8
}
const { firstName, lastName, ...properties } = person;
console.log(firstName);		// Max
console.log(lastName);		// Mustermann
console.log(properties); 	// { age: 33, hairColor: 'brown', height: 1.8 }
