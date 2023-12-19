const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  failOnStatusCode: false,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity: false,
    experimentalRunAllSpecs: true,
    scrollBehavior: 'center',
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        table(message) {
          console.table(message);
          return null;
        },
      });
    },
  },
});
