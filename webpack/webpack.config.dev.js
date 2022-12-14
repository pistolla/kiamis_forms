'use strict';
const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');

/*
 * so process.cwd() is used instead to determine the correct base directory
 * Read more: https://nodejs.org/api/process.html#process_process_cwd
 */
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    context: path.resolve(CURRENT_WORKING_DIR, 'client'),
    entry: {
        app: [
            'webpack-hot-middleware/client', // bundle the client for hot reloading
            './main.tsx'  // the entry point of app
        ]
    },
    mode: 'development',
    output: {
        path: path.resolve(CURRENT_WORKING_DIR, 'dist'), //  destination
        filename: 'client.bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NoEmitOnErrorsPlugin(),  // do not emit compiled assets that include errors
        new Dotenv()
    ],
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            },
            {
                test: /\.(ts|tsx)$/, //check for all js files
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-function-bind', '@babel/plugin-proposal-class-properties', '@emotion', ["import", {
                        "libraryName": "antd",
                        "libraryDirectory": "es",
                        "style": true
                    }]],
                },
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.mjs', '.json','.css'],
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devtool: "inline-source-map"
};

module.exports = config;