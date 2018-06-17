const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
    ...baseConfig,
    output: {
        filename: 'js/app.[hash:4].js',
        path: path.join(__dirname, 'dist'),
        pathinfo: true,
    },
    mode: 'production',
    plugins: [
        ...baseConfig.plugins,
        new ManifestPlugin({
            fileName: path.resolve(process.cwd(), 'dist/webpack-assets.json'),
            filter: file => file.isInitial
        }),  
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'GH_PAGES': JSON.stringify(JSON.parse(process.env.GH_PAGES || 'false') ),
                'NODE_ENV': '"production"'
            },
        })
    ],
    module: {
        ...baseConfig.module,
        rules: [
            ...baseConfig.module.rules
        ]
    }
}
