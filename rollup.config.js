import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from 'rollup-plugin-json';
import typescript from '@rollup/plugin-typescript';
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

const { name } = pkg

export default defineConfig({
  input: 'src/main.ts',
  output: [{
    file: `dist/${name}.umd.js`,
    format: 'umd',
    name: name,
    sourcemap: true,
  }, {
    file: `dist/${name}.es.js`,
    format: 'es',
    sourcemap: true,
  }, {
    file: `dist/${name}.cjs.js`,
    // 通用格式可以用于node和browser等多个场景
    format: 'cjs',
    // 注意如果是umd格式的bundle的话name属性是必须的，这时可以在script标签引入后window下会挂载该属性的变量来使用你的类库方法
    name,
    sourcemap: true,
  }],
  plugins: [
    json(),
    typescript(),
    nodeResolve(),
    // terser(),
    babel({ babelHelpers: "bundled" }), // babel配置,编译es6
  ]
})