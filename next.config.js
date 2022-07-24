/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: true,
  },
  images: {
    domains: ["stpubdata-jwst.stsci.edu"],
  },
  experimental: {
    newNextLinkBehavior: true,
    optimizeCss: true,
    gzipSize: true,
    scrollRestoration: true,

    images: {
      domains: ["stpubdata-jwst.stsci.edu"],
      allowFutureImage: true,
    },
  },
};
