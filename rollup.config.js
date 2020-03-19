export default {
  input: 'src/index.js',
  output: {
    dir: 'dist/cjs',
    compact:  true ,
    format: 'cjs'
  },
  external: [ '@geekagency/composite-js' ]
};
