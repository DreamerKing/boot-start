const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /.js$/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
          //  body: true
        })
    ]
}