const path = require('path');
const glob = require('glob');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: glob
                .sync(path.join(__dirname, '../node_modules/@material'))
                .map(dir => path.dirname(dir))
            }
          }
        ]
      }
    ]
  }
};
