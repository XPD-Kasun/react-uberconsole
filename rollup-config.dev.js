import tsPlugin from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';
import scss from 'rollup-plugin-scss';

const developmentConfig = {
       input: "./src/index.ts",
       output: {
              dir: "./dist",
              format: "cjs"
       },
       plugins: [
              // del({
              //        targets: 'dist/*'
              // }),
              tsPlugin(),
              scss({
                     output: './dist/styles.css'
              }),
       ]

};

export default developmentConfig;