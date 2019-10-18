const isProd = process.env.NODE_ENV === 'production';
const path = require('path');
const glob = require('glob');

module.exports = {
  siteName: 'Akli',
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.AKLIAISSAT_ANALYTICS_KEY
          ? process.env.AKLIAISSAT_ANALYTICS_KEY
          : 'GA_TRACKING_ID',
        debug: {
          enabled: !isProd,
          sendHitTask: isProd,
        },
      },
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.AKLIAISSAT_CONTENTFUL_SPACE
          ? process.env.AKLIAISSAT_CONTENTFUL_SPACE
          : 'CONTENTFUL_SPACE',
        accessToken: process.env.AKLIAISSAT_CONTENTFUL_TOKEN
          ? process.env.AKLIAISSAT_CONTENTFUL_TOKEN
          : 'CONTENTFUL_TOKEN',
        typeName: 'Contentful',
      },
    },
  ],
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  },
  css: {
    loaderOptions: {
      scss: {
        sourceMap: true,
        includePaths: glob
          .sync(path.join(__dirname, 'node_modules/@material'))
          .map((dir) => path.dirname(dir)),
      },
    },
  },
};
