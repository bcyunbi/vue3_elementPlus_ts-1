module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/vue3-essential', '@vue/standard', '@vue/typescript/recommended'],
	parserOptions: {
		ecmaVersion: 2020
	},
	rules: {
		indent: ['error', 'space'],
		semi: ['error', 'always'],
		quotes: [
			2,
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'no-irregular-whitespace': 2,
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		indent: ['error', 'tab'],
		'no-tabs': ['off', { allowIndentationTabs: true }],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',
		'no-extra-boolean-cast': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/ban-ts-ignore': 'off',
		'prefer-const': 'off'
	}
};
