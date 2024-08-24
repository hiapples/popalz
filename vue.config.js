// vue.config.js
module.exports = {
    outputDir: 'dist',
    devServer: {
      proxy: 'http://localhost:8000'  // PHP 服务器的地址
    },
    pwa: {
      name: '我的 PWA 应用',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      manifestOptions: {
        short_name: 'PWA',
        start_url: '/',
        display: 'standalone',
        background_color: '#42b983'
      }
    }
  }
  