const { defineConfig } = require("cypress");


module.exports = defineConfig({
    env: {
        MAILOSAUR_API_KEY: "00aFft9D0JHFaMhJ",
        "GOOGLE_CLIENT_ID": "16227205146-08sr44d68eetj2fl0vkssheu6331j34u.apps.googleusercontent.com",
        "GOOGLE_CLIENT_SECRET": "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",
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