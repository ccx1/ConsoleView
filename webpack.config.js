var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    mode: 'development',
    output: {
        publicPath: '/'
    },

    module: {
        rules: [{
            test: /\.js[x]?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            loader: 'babel-loader?cacheDirectory',
            // query: {
            //     presets: ['env', 'react', "stage-1"]
            // }
        },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: [
                                        '>1%',
                                        'last 4 versions',
                                        'Firefox ESR',
                                        'not ie < 9' // React doesn't support IE8 anyway
                                    ]
                                })
                            ]
                        }
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
                exclude: /\.useable\.less$/
            },
            {
                test: /\.useable\.less$/,
                use: [{
                    loader: 'style-loader/useable'
                },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ],
                exclude: /node_modules/
            }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'node_modules')]
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist',
        port: 8080,
        hot: true,
        historyApiFallback: true,
        host: '127.0.0.1',
        // open:true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/test/*': {
                target: 'http://127.0.0.1:3001',
                changeOrigin: true,
                secure: false,
                // 替换包含test的接口
                pathRewrite: {
                    '^/test/*': ''
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};