const path = require("path");
const withOffline = require("next-offline");

const config = {
  // Service Worker
  generateSw: false,
  devSwSrc: path.join(__dirname, "./utils/serviceWorker/sw.js"),
  workboxOpts: {
    swDest: "./service-worker.js",
    swSrc: path.join(__dirname, "./utils/serviceWorker/sw.js"),
    globPatterns: ["**/*.{ico,html,js,json}"],
    globDirectory: "./_next/static"
  }
};

module.exports = withOffline(config);
