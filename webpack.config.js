const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractLess = new ExtractTextPlugin({
    filename: 'bundles/style/[name].css'
});


module.exports = {
    entry: {
        app: path.join(__dirname, 'src/index.js')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
            {
                test: /\.(less|css)$/,
                // exclude: /node_modules/,
                use: extractLess.extract({
                    use: [{
                        loader: 'css-loader'
                    }, {
                        loader: 'less-loader'
                    }],
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loaders: ['file-loader?&emitFile=false&publicPath=/fonts/&name=[name].[ext]']
            }
        ]
    },
    plugins: [
        extractLess
    ],
    output: {
        filename: 'bundles/js/[name].js',
        path: path.join(__dirname, 'public')
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        hot: true
    }
};
