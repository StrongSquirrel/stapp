const baseConfig = require('./webpack.config.prod')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    ...baseConfig,
    plugins: [
        ...baseConfig.plugins,
        new BundleAnalyzerPlugin()
    ],
}
