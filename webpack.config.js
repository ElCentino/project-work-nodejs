const path = require('path');

module.exports = {

    entry: './src/details-search-engine/index.js',
    output: {
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },

    module : {
        rules : [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                query: {
                    presets : ['react', 'env']
                },
                loader : 'babel-loader'
            }, 
            {
                test: /\.json$/, 
                exclude: /(node_modules)/,
                loader: 'json-loader'
            }
        ]
    }

};
