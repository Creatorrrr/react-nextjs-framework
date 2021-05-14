const HOST = process.env.NEXT_PUBLIC_HOST;

const withTM = require("next-transpile-modules")(["react-async"]);

module.exports = withTM({
  future: {
    webpack5: true,
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
