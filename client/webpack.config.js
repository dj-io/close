const path = require('path');

module.exports = {
    resolve: {
        entry: path.resolve(__dirname, './src/index.js'),
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}