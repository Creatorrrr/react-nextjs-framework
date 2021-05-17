const HOST = process.env.NEXT_PUBLIC_HOST;

const withTM = require("next-transpile-modules")(["react-async"]);

module.exports = withTM({
  future: {
    webpack5: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: `/api/:slug*`,
        destination: `${HOST}/api/:slug*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/aggrid",
        permanent: true,
      },
      {
        source: "/routing",
        destination: "/routing/aggrid",
        permanent: true,
      },
    ];
  },
});
