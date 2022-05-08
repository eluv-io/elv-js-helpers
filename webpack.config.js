const path = require('path')
const webpack = require('webpack')

module.exports = function (env) {
  const config = {
    mode: 'production',
    entry: './build/main.js',
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
      })
    ],
  }
  if(env.analyze) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
    config.plugins.push(new BundleAnalyzerPlugin())
  }

  return config
}
