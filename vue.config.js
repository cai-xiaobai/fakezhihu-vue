module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/users': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        autoRewrite: true,
        cookieDomainRewrite: true,
      },
    },
  },
};