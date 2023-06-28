module.exports = {
  reactStrictMode: true,
};



const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  object-src 'none';
  child-src example.com;
  style-src 'self' example.com;
  font-src 'self';
`;

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "Permissions-Policy",
    value: "geolocation=*", // allow specified policies here
  },

  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },

  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Server",
    value: "Apache", // phony server value
  },

];

module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

{/* # Progressive Web App Example

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
        disable: process.env.NODE_ENV === "development",

  },
});


*/}
