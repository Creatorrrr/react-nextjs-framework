const HOST = process.env.NEXT_PUBLIC_HOST;

module.exports = {
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
    ];
  },
};
