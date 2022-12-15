const path = require('path')
const webpack = require('webpack')

const PACKAGE_JSON = require('./package.json')
const removeDashAndCapitalize = text => text.replace(/-/, '').toUpperCase()
const kebabCaseToPascalCase = text => text.replace(/(^\w|-\w)/g, removeDashAndCapitalize)
const packageBasename = PACKAGE_JSON.name.split('/').slice(-1)[0]

module.exports = function (env) {
  const config = {
    mode: 'production',
    entry: './build/main.js',
    optimization: {
      usedExports: true,
    },
    output: {
      filename: packageBasename + '.js',
      path: path.resolve(__dirname, 'build', 'dist'),
      library: {
        name: kebabCaseToPascalCase(packageBasename),
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
