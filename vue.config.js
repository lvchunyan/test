const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

// 项目部署基础
// 默认情况下，我们假设你的应用将被部署在域的根目录下,
// 例如：https://www.my-app.com/
// 默认：'/'
// 如果您的应用程序部署在子路径中，则需要在这指定子路径
// 例如：https://www.foobar.com/my-app/
// 需要将它改为'/my-app/'
// iview-admin线上演示打包路径： https://file.iviewui.com/admin-dist/
const BASE_URL = process.env.NODE_ENV === 'production'
  ? '/'
  : '/'

module.exports = {
  // Project deployment base
  // By default we assume your app will be deployed at the root of a domain,
  // e.g. https://www.my-app.com/
  // If your app is deployed at a sub-path, you will need to specify that
  // sub-path here. For example, if your app is deployed at
  // https://www.foobar.com/my-app/
  // then change this to '/my-app/'
  publicPath: BASE_URL,
  // tweak internal webpack configuration.
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // 如果你不需要使用eslint，把lintOnSave设为false即可
  lintOnSave: false,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  devServer: {
    // proxy: 'localhost:3000'
    /* proxy: {
      '/api': {
        // 配置好后一定要关闭原来的server，重新npm run dev启动项目。不然无效
        target: 'http://192.168.1.222:8080/', // 必须写 http/https
        pathRewrite: { '^/api': '' }, //  用/api 代替target里面的地址
        changeOrigin: true
      }
    } */
    proxy: {
      '/api': {
        target: 'http://36.22.178.70:12383/',
        // target: 'http://192.168.1.123:8989/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      },
      '/util': {
        // target: 'http://192.168.1.123:8990/',
        target: 'http://192.168.108.75:8989/',
        pathRewrite: { '^/util': '' },
        changeOrigin: true
      },
      '/sso': {
        target: 'http://36.22.178.70:12384/',
        // target: 'http://192.168.1.123:1111/',
        pathRewrite: { '^/sso': '' },
        changeOrigin: true
      },
      '/sms': {
        target: 'http://192.168.1.123/message/',
        pathRewrite: { '^/sms': '' },
        ws: true, // proxy websockets
        changeOrigin: true
      },
      '/smes': {
        target: 'http://192.168.1.123:8002/push/',
        pathRewrite: { '^/smes': '' },
        ws: true, // proxy websockets
        changeOrigin: true
      },
      '/geocoder': {
        // target: 'http://192.168.1.123/message/',
        target: 'http://api.map.baidu.com/geocoder/v2/',
        pathRewrite: { '^/geocoder': '' },
        changeOrigin: true
      }
    }
  }
}
