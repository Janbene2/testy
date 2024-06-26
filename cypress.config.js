const { defineConfig } = require("cypress");

module.exports = defineConfig({
  "chromeWebSecurity": false,
  e2e: {
    viewportHeight: 1200,
    viewportWidth: 1600
  },
});
