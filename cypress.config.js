const { defineConfig } = require("cypress");

module.exports = defineConfig({
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    projectId: "thrjkc",
    e2e: {
        baseUrl: 'http://localhost:3000',
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});