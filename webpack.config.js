const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        resolve: {
          extensions: ['.js', '.jsx']
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: '/\..html$/',
        use: [
          {
            loader: 'html-loader',
          }
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filname: './index.html',
    }),
    new CopyPlugin([
      {
        from: 'public/**/*',
        to: 'dist/',
        ignore: ['*.html'],
        transformPath(targetPath) {
          return targetPath.replace('\\public\\','');
        }
      }
    ]),
  ]
};