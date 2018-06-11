const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

module.exports = {
    ...baseConfig,
    mode: 'production',
    plugins: [
        ...baseConfig.plugins,
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
