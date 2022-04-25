const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'none',
  entry: './build/index.js',
  optimization: {
    usedExports: true,
  },
  output: {
    filename: 'elv-js-helpers.js',
    path: path.resolve(__dirname, 'build', 'dist'),
    library: {
      name: 'ElvJsHelpers',
      type: 'var',
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
}
