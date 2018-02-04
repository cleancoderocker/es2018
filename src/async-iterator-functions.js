const getRandomNumberAsync = () => new Promise((resolve, reject) => {
	setTimeout(() => resolve(Math.random()), 5000);
});

// Supported in Chrome
async function* repeatRandomNumberAsync() {
	while (true) {
		const number = await getRandomNumberAsync();
		yield number;
	}
}

const asyncIterable = repeatRandomNumberAsync();
const asyncIterator = asyncIterable[Symbol.asyncIterator]();
asyncIterator.next()
	.then(result1 => {
		// { value: '0.8079568015936667', done: false }
		console.log(result1);
		return asyncIterator.next();
	})
	.then(result2 => {
		// { value: '0.5766898916887389', done: false }
		console.log(result2);
		return asyncIterator.next();
	})
	.then(result3 => {
		// { value: '0.06312379943064839', done: false }
		console.log(result3);
		return asyncIterator.next();
	});

(async () => {
	const result1 = await asyncIterator.next();
	console.log(result1);
	const result2 = await asyncIterator.next();
	console.log(result2);
	const result3 = await asyncIterator.next();
	console.log(result3);
})();

// (async () => {
// 	for await (const number of repeatRandomNumberAsync()) {
// 		console.log(number);
// 	}
// })();
