const path = require('path');
const { CheckerPlugin } = require('awesome-typescript-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "../"), //默认是项目的根目录
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        publicPath: "/dist"
    },
    resolve:{
        modules: ["node_modules", "./src"],
        extensions: [".js", ".ts"]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                options: {
                    useBabel: true,
                    babelOptions:{
                        babelrc: true
                    },
                   babelCore: "babel-core"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../build'
                        }
                    },
                    'css-loader?minimize'
                ]
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new MiniCssExtractPlugin({
            filename: "css/[name]_[contenthash:6].css"
        })
    ],
    devtool: "source-map",
    devServer: {
       // contentBase: path.resolve(__dirname, "../dist"),
        port: 8000
    }
}