import tsPlugin from '@rollup/plugin-typescript';

const developmentConfig = {
       input: "./src/index.ts",
       output: {
              dir: "./dist",
              format: "cjs",
              exports: "default"
       },
       plugins: [
              tsPlugin()
       ]

};

export default developmentConfig;