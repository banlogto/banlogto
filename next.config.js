// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',
  assetPrefix: isProd ? '/your-repo-name/' : '',
  images: {
    unoptimized: true,
  },
}
