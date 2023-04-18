// @ts-ignore
import { merge } from 'webpack-merge';
import common from './webpack.common';

export default [
  merge(
    common.libConfig,
    {
      mode: 'development',
    }
  ),
  merge(
    common.exampleConfig,
    {
      mode: 'development',
      devtool: 'cheap-module-source-map',
    },
  ),
];
