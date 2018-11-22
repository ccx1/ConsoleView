var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
    // 定位点
    entry: [
        'babel-polyfill',
        './src/index'
    ],
    mode: 'development',
    output: {
        publicPath: '/',
        filename: 'assets/demo/js/[name].js',
    },
    module: {
        rules: [{
            test: /\.js[x]?$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            loader: 'babel-loader?cacheDirectory',

        },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader'
                },
                    {
                        loader: 'css-loader',
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
        noParse: [
            /moment-with-locales/,
            /react.production.min/,
            /react-router-dom.production.min/,
            /redux.min.js/,
            /react-router.min.js/,
            /redux-saga.min.js/
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.resolve(__dirname, 'node_modules')],
        alias: {
            'moment': 'moment/min/moment-with-locales.min.js',
            'react-dom': 'react-dom/umd/react-dom.production.min.js',
            'react': 'react/umd/react.production.min.js',
            'redux': 'redux/dist/redux.min.js',
            'react-router-dom': 'react-router-dom/umd/react-router-dom.min.js',
            'redux-saga': 'redux-saga/dist/redux-saga.min.js'
        }
    },
    devtool: 'eval-source-map',
    // 设置服务
    devServer: {
        contentBase: './dist',
        // 端口
        port: 8080,
        // 热更新
        hot: true,
        historyApiFallback: true,
        // 设为0，0，0，0就能让其他设备访问了
        host: '0.0.0.0',
        // open:true,
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },

        proxy: {
            // 将包含test请求都发出去
            '/test/*': {
                target: 'http://192.168.0.104:3001',
                changeOrigin: true,
                secure: false,
                // 替换包含test的接口
                // pathRewrite: {
                //     '^/test/*': ''
                // }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './template/demo/index.html'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
