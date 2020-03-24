const path = require('path');
const webpack = require('webpack');

function getConfig(env) {
    return {
        mode: env,
        entry: './src',
        output: {
            path: path.resolve('lib'),
            library: 'VersionControl',
            libraryTarget: 'umd',
            filename: env === 'production' ? 'index.min.js' : 'index.js',
            globalObject: 'this'
        },
        target: 'web',
        externals: {
            react: {
                root: 'React',
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'react',
            },
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            }],
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env),
            }),
        ],
    };
}

module.exports = [
    getConfig('development'),
    getConfig('production'),
];
