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

const latexDocument = latex`
	\newcommand{\fun}{\textbf{Beispiel}}     // Funktioniert
	\newcommand{\unicode}{\textbf{Beispiel}} // Bisher Fehler, da ungültiges Token
	\newcommand{\xerxes}{\textbf{Beispiel}}  // Bisher Fehler, da ungültiges Token
`;
console.log(latexDocument);
