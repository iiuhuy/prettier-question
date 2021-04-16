/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 */
export default {
  // proxy: {
  //   '/': {
  //     target: 'http://vbt-gateway:9999',
  //     changeOrigin: true,
  //     pathRewrite: { '^': '/' },
  //   },
  // },
  dev: {
    '/api': {
      target: 'http://vbt-gateway:9999',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  test: {
    '/api/': {
      target: 'your test url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
  pre: {
    '/api/': {
      target: 'your pre url',
      changeOrigin: true,
      pathRewrite: { '^': '' },
    },
  },
};
