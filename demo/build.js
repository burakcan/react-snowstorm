var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var WebpackDevServer = require("webpack-dev-server");
var NODE_ENV = process.env.NODE_ENV || 'production';

var config = {
  mode: NODE_ENV,
  entry: {
    main: [path.join(__dirname, '/src/main.js')]
  },

  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    publicPath: '/'
  },

  devtool: ((NODE_ENV === 'development') ? 'source-map' : false),

  plugins: [
    new HtmlWebpackPlugin({
      title: '',
      template: path.join(__dirname, '/src/index.html'),
      inject: true,
      filename: 'index.html'
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(NODE_ENV)
      }
    }),
  ],

  resolve: {
    extensions: ['.js', '.css'],
    alias: {
      'root': path.join(__dirname, '/src'),
      'components': path.join(__dirname, '/src/components'),
      'styles': path.join(__dirname, '/src/styles')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrcRoots: ['.', '../']
            }
          }
        ],
        include: path.join(__dirname, '/src')
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}

if (NODE_ENV === 'production') {
  // config.plugins.push(new UglifyJsPlugin({
  //   compress  : { warnings : false },
  //   sourcemap : false,
  //   mangle    : true
  // }));
  // config.optimization = {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       compress: { warnings: false },
  //       sourcemap: false,
  //       mangle: true
  //     })
  //   ]
  // }
} else if (NODE_ENV === 'development') {
  config.entry.main.unshift('webpack/hot/only-dev-server');
  config.entry.main.unshift('webpack-dev-server/client?http://0.0.0.0:3000');
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

const compiler = webpack(config);

if (NODE_ENV === 'development') {
  const server = new WebpackDevServer(compiler, {
    contentBase: path.join(__dirname, 'dist'),
    noInfo: false,
    quiet: false,
    lazy: false,
    hot: true,
    publicPath: '/',
    stats: {
      colors: true,
      chunks: false
    }
  });

  server.listen(3000, 'localhost', function () {
    console.log('Webpack Dev Server is listening on port 3000');
  });
} else if (NODE_ENV === 'production') {
  compiler.run(function (err, stats) {
    if (err) throw err;

    console.log(stats.toString({
      colors: true,
      chunks: false
    }));
  });
}
