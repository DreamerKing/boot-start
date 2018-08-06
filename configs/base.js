const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, "../"), //默认是项目的根目录
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    resolve:{
        modules: ["node_modules", "./src"]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    use: ['css-loader?minimize']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/[name]_[contenthash:6].css"
        })
    ],
    devtool: "source-map",
    devServer: {
       // contentBase: path.resolve(__dirname, "../dist"),
        port: 8000
    }
}