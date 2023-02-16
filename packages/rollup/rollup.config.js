export default {
  input: 'src/index.js',
  output: [
    {
      file: 'lib/index.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'lib/index.min.js',
      format: 'iife',
      name: 'debug_dload',
      sourcemap: true,
    },
  ]
};
