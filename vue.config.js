const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  devServer: {
    historyApiFallback: true
  },
  css:{
    loaderOptions:{
      scss:{
        additionalData: `@import "@/assets/style/variables.scss";`
      }
    }
  }
  
})
