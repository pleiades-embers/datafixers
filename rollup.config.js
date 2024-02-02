import ts from 'rollup-plugin-typescript2'

export default [
	{
		input: 'src/index.ts',
		output: {
			name:"datafixers",
			dir: "lib",
			format: 'es',
			preserveModules: true, 
			preserveModulesRoot: 'src',
		},
		plugins: [
			ts({
			  tsconfig: 'tsconfig.json'
		  }),
		  ],
	
	},
];