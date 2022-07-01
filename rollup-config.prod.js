import tsPlugin from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import scss from 'rollup-plugin-scss';

const productionConfig = {
       input: "./src/index.ts",
       output: {
              dir: "./dist",
              format: "cjs"
       },
       plugins: [
              del({
                     targets: 'dist/*'
              }),
              tsPlugin(),
              terser(),
              scss({
                     output: './dist/styles.css',
                     outputStyle: "compressed",
              }),
       ]

};

export default productionConfig;