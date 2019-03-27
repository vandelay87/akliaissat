const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteName: 'Akli Aissat',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.AKLIAISSAT_ANALYTICS_KEY ? process.env.AKLIAISSAT_ANALYTICS_KEY : 'GA_TRACKING_ID',
        autoTracking: {
          exception: true,
        },
        debug: {
          enabled: !isProd,
          sendHitTask: isProd,
        },
      }
    },
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.AKLIAISSAT_CONTENTFUL_SPACE ? process.env.AKLIAISSAT_CONTENTFUL_SPACE : 'CONTENTFUL_SPACE',
        accessToken: process.env.AKLIAISSAT_CONTENTFUL_TOKEN ? process.env.AKLIAISSAT_CONTENTFUL_TOKEN : 'CONTENTFUL_TOKEN',
        typeName: 'Contentful'
      }
    }
  ]
}
