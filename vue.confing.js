module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/stock-trader-on-vue/'
    : '/',
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
  }
}