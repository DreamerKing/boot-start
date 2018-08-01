const path = require('path');

module.exports = {
   // context: path.resolve(__dirname, "../"), //默认是项目的根目录
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader?minimize']
        }
        ]
    }
}