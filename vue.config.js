module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue_test_3/'
    : '/',
  css: {
    loaderOptions: {
      css: {
        sourceMap: process.env.NODE_ENV !== "production" ? true : false
      }
    }
  }
};
