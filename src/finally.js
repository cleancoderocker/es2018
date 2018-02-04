const Promise = require('bluebird');

// Synchrones try-catch-finally
const doSomething = () => {};
try {
	doSomething();
	console.log('Did something');
} catch(error) {
	console.error('An error occured');
} finally {
	console.log('Executed in any case')
}

// Asynchrones try-catch-finally mit async/await
const doSomethingAsync = () => new Promise((resolve, reject) => {
	setTimeout(resolve, 5000);
});

(async () => {
	try {
		await doSomethingAsync();
		console.log('Did something');
	} catch(error) {
		console.error('An error occured');
	} finally {
		console.log('Executed in any case')
	}
})();

// Asynchrones try-catch-finally mit then() / catch() / finally()
doSomethingAsync()
	.then(() => console.log('Did something'))
	.catch(() => console.error('An error occured'))
	.finally(() => console.log('Executed in any case'));