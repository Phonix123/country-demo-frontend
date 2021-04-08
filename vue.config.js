module.exports = {
  configureWebpack: {
    devtool: "source-map"
  },
  outputDir: "../country-demo/src/main/resources/static/",
  transpileDependencies: [
    "vue-echarts",
    "resize-detector",
    "vuetify",
    "three",
    "vuetify-datetime-picker",
    "vue",
    "vuex-persist"
  ],

  publicPath: "/",

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: true
    }
  },

  css: {
    sourceMap: true
  }
};
