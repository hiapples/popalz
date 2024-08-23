// vue.config.js
module.exports = {
    outputDir: 'dist',
    devServer: {
      proxy: 'http://localhost:8000'  // PHP 服务器的地址
    }
  }
  