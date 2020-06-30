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
        filename: './src/index.js',
        path: path.resolve(__dirname, 'dist')
    }
};