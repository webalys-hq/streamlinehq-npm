import replace from '@rollup/plugin-replace'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from '@rollup/plugin-typescript'

const NODE_ENV = process.env.NODE_ENV || 'development'

export default {
  input: {
    install: 'src/install.ts',
  },
  output: {
    dir: 'build',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
      preventAssignment: true,
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
    }),
    resolve({ preferBuiltins: true }),
    commonjs(),
    typescript({
      declaration: true,
      declarationDir: 'build',
      rootDir: 'src/',
    }),
    terser(),
  ],
}
