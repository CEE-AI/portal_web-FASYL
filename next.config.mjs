// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

// /** @type {import('next').NextConfig} */
// const { i18n } = require("./next-i18next.config");

// const nextConfig = {
//   i18n,
// };

// export default nextConfig;

import i18n from "./next-i18next.config.mjs";

/** @type {import('next').NextConfig} */

// const nextConfig = {
//   basePath: process.env.BASEPATH,

  // TODO: below line is added to resolve twice event dispatch in the calendar reducer
  // output: 'export',

  // distDir: 'build',
  // redirects: async () => {
  //   return [
  //     {
  //       source: '/',
  //       destination: '/en',
  //       permanent: true,
  //       locale: false
  //     }
  //   ]
  // },

  // TODO: below line is added to resolve twice event dispatch in the calendar reducer
//   reactStrictMode: false,
//   eslint: {
//     dirs: ['utils', 'app'],
//     ignoreDuringBuilds: true
//   },
//   typescript: {
//     ignoreBuildErrors: true
//   }
// }

// module.exports = nextConfig


const nextConfig = {
  i18n,
};

export default nextConfig;
