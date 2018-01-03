const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname + '/src/Suggestions.vue'),
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: 'v-suggestions.js',
        libraryTarget: 'umd',

        // These options are useful if the user wants to load the module with AMD
        library: 'v-suggestion',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                include: __dirname,
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: "css-loader"
                })
            }
        ]
    },
    externals: {
        debounce: 'debounce'
    },
    plugins: [
        new ExtractTextPlugin("v-suggestions.css"),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
            mangle: true,
            compress: {
                warnings: false
            }
        })
    ]
};
