const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const nodemon = require('nodemon');

const compiler = webpack(webpackConfig);

compiler.run((err) => {
    if (err) {
        console.log('RUN Compilation failed:', err);
    }
    compiler.watch({}, (err) => {
        if (err) {
            console.log('WATCH Compilation failed:', err);
        }
        console.log('WATCH Compilation was succesfully');
    });

    nodemon({
        script: path.resolve(__dirname, '../dist/server/server.js'),
        watch: [
            path.resolve(__dirname, '../dist/server/server.js'),
            path.resolve(__dirname, '../dist/client/client.js'),
        ],
    });
});