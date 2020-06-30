const path = require('path');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    module: {
    },
    resolve: {
        extensions: ['.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};