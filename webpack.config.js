const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: {
    'main-app': `${SRC_DIR}/index.jsx`,
    'signup': `${SRC_DIR}/signup.jsx`,
  },
  output: {
    filename: '[name].js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};
