const webpack = require('webpack')
const baseConfig = require('./webpack.config.base')

module.exports = {
    ...baseConfig,
    mode: 'development',
    devtool: '#inline-source-map',
    entry: [
        'eventsource-polyfill', // necessary for hot reloading with IE
        // Include an alternative client for WebpackDevServer. A client's job is to
        // connect to WebpackDevServer by a socket and get notified about changes.
        // When you save a file, the client will either apply hot updates (in case
        // of CSS changes), or refresh the page (in case of JS changes). When you
        // make a syntax error, this client will display a syntax error overlay.
        // Note: instead of the default WebpackDevServer client, we use a custom one
        // to bring better experience for Create React App users. You can replace
        // the line below with these two lines if you prefer the stock client:
        // require.resolve('webpack-dev-server/client') + '?/',
        // require.resolve('webpack/hot/dev-server'),
        require.resolve('react-dev-utils/webpackHotDevClient'),
        ...baseConfig.entry,
    ],
    plugins: [
        ...baseConfig.plugins,
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        ...baseConfig.module,
        rules: [
            ...baseConfig.module.rules
        ]
    }
}
