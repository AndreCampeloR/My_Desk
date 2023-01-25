const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  resolve: {
    fallback: {
      'https': require.resolve('https-browserify')
    }
}

})
