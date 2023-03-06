const { defineConfig } = require("cypress");


module.exports = defineConfig({
    env: {
        MAILOSAUR_API_KEY: "00aFft9D0JHFaMhJ",
    },
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    projectId: "thrjkc",
    e2e: {
        baseUrl: 'https://stage.backendless.com',
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    }
})