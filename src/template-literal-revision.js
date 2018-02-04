function tagFunction(strings, ...values) {
	return {
		strings,
		raw: strings.raw
	}
}

const result = tagFunction`\u{41}`;
// { strings: [ 'A' ], raw: [ '\\u{41}' ] }
console.log(result);

function latex(strings, ...values) {
	return {
		strings,
		raw: strings.raw
	}
}

// const latexDocument = latex`
// 	\newcommand{\fun}{\textbf{Beispiel}}     // Works
// 	\newcommand{\unicode}{\textbf{Beispiel}} // Does not work because of invalid token
// 	\newcommand{\xerxes}{\textbf{Beispiel}}  // Does not work because of invalid token
// `;
// console.log(latexDocument);
