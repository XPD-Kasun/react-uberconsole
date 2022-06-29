import tsPlugin from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const productionConfig = {
       input: "./src/index.ts",
       output: {
              dir: "./dist",
              format: "cjs",
              exports: "default"
       },
       plugins: [
              tsPlugin(),
              terser()
       ]

};

export default productionConfig;