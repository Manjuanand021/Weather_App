var path = require('path'),
    // optimize = require('webpack').optimize,
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HTMLWebpackPlugin = require('html-webpack-plugin'),
    CleanPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
    filename: 'assets/css/main.css'
});

module.exports = {
    entry: './main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
                use: 'babel-loader',
                test: /\.js$/
            }, {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader', 'resolve-url-loader']
                })
            }, {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        //Copy images to outputPath directory
                        outputPath: '/assets/images/',
                        //Keep the correct reference in index.html
                        // publicPath: 'assets/images/'
                    }
                }]
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HTMLWebpackPlugin({
            template: './index.html',
            hash: true
        }),
        //Clean build folder before creating build
        new CleanPlugin(['build'])
    ]
}