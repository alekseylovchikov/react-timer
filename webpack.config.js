var webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './src/App.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname + '/public/js/',
        filename: 'bundle.js'
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.js', '.jsx'],
        alias: {
            Main: 'src/components/Main.jsx',
            NotFound: 'src/components/NotFound.jsx',
            Navbar: 'src/components/Navbar.jsx',
            applicationStyles: 'src/styles/app.scss'
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exlcude: /node_modules/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};
