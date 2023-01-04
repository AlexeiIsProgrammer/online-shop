//npm init -y : инициализирует npm (запись в package.json)
//npm install webpack -D (установка вебпака)
//npm install webpack-cli webpack-dev-server -D (cli для управления вебпака, писать скрипты в package.json; server для использования своего сервера)

const webpack = require('webpack'); //
const path = require('path'); //правильные пути указывать
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Плагин для HTLM npm install html-webpack-plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //Плагин для CSS
const { postcss } = require('autoprefixer');
const mode = process.env.NODE_ENV || 'development'; //указание среды разработки ()

const devMode = mode === 'development'; // Проверка мода на девелопмент

const target = devMode ? 'web' : 'browserslist'; // Если development, то web настройки, если продакшн, то файл browserslistrc
const devtool = devMode ? 'source-map' : undefined; // При дев моде, будет source-map для отслежиания ошибок 

module.exports = {
    mode, //Мод (дев или прод)
    target, // ресурс (web или browserslistrc)
    devtool, // отслеживание ошибок
    devServer: {
        port: 3000, //Порт
        open: true, //Открывать браузер
        hot: true, //Обновление стилей (бывают сложности)
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')], //npm install --save @babel/polyfill : для поддержки скриптов из браузеров    
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean:true,
        filename: 'index.js', //name - main по умолчанию, contenthash нужен для сборки разных имен, чтобы обновление было из разных файлов
    },
    module: {
        rules: [
            { //npm install --save-dev html-loader
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/,  // исключаем из обработки папку node_modules
                loader: "babel-loader",   // определяем загрузчик
                options:{
                    presets:[ "@babel/preset-react"]    // используемые плагины
                }
            },
            {//npm install --save-dev @babel/core @babel/preset-env babel-loader
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env'],
                }
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {//npm install --save-dev css-loader sass-loader sass
                test: /\.(c|sc|sa)ss$/i,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    { // npm install --save-dev postcss-loader postcss postcss-preset-env (Префиксы)
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions:  {
                                plugins: [require('postcss-preset-env')],
                            }
                        }
                    },
                    "sass-loader",
                ],
            },
            {
                test: /\.(svg|jpg)$/,
                type: 'asset/resource',
            }
        ]
    },
    // resolve: {
    //     extensions: ['.tsx', '.ts', '.js', '.jsx'],
    // },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        })
    ]
};

//npm i scss-reset --save; почистить html