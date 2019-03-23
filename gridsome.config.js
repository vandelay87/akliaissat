const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  siteName: 'Gridsome',
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
    }
  ]
}