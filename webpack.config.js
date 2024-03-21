const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});

// this is to load env vars for this config
require('dotenv').config({ // it puts the content to the "process.env" var. System vars are taking precedence
    path: '.env',
});
// and this to pass env vars to the JS application
const DotenvPlugin = require('webpack-dotenv-plugin');

module.exports = {
    entry: path.join(__dirname, "examples/src/index.js"),
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
                loader: 'file-loader',
                include: [/fonts/]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'file-loader',
                include: [/images/]
            }
        ]
    },
    plugins: [
      htmlWebpackPlugin,
      new DotenvPlugin({ // makes vars available to the application js code
        path: '.env',
        sample: '.env.example',
        allowEmptyValues: true,
    }),
    ],
    resolve: {
        extensions: [".js", ".jsx", ]
    },
    devServer: {
        port: 3001
    }
};
