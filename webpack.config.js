var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
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
          Timer: 'src/components/Timer.jsx',
          Countdown: 'src/components/Countdown.jsx',
          CountdownForm: 'src/components/CountdownForm.jsx',
          Navbar: 'src/components/Navbar.jsx',
          Clock: 'src/components/Clock.jsx',
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
  }
};
