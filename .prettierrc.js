module.exports = {
	singleQuote: true,
	semi: true,
	tabWidth: 2,
	bracketSpacing: true,
	trailingComma: 'es5',
	bracketSameLine: false,
	useTabs: true,
	printWidth: 120,
	endOfLine: 'lf',
	overrides: [
		{
			files: '*.md',
			options: {
				singleQuote: false,
				quoteProps: 'preserve',
			},
		},
	],
};
