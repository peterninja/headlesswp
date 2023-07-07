/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    prependData: `
      @import './src/styles/scss/_variables.scss';
      @import './src/styles/scss/_fonts.scss';
    `,
  },
}

module.exports = nextConfig
