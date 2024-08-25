// vue.config.js
module.exports = {
  outputDir: 'dist',
  devServer: {
    proxy: 'http://localhost:8000'  // PHP 服务器的地址
  },
  pwa: {
    name: 'PoPalz',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    workboxOptions: {
      // skip waiting on the new service worker
      skipWaiting: true,
      clientsClaim: true,
    }
  }
}
  