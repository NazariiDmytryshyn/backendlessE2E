const { defineConfig } = require("cypress");


module.exports = defineConfig({
    env: {
        MAILOSAUR_API_KEY: "00aFft9D0JHFaMhJ",
        "db": {
            "host": "localhost",
            "user": "root",
            "password": "rootpassword"
        },
    },
    defaultCommandTimeout: 10000,
    viewportWidth: 1280,
    projectId: "thrjkc",
    e2e: {
        baseUrl: "https://stage.backendless.com",
        chromeWebSecurity: false,
        setupNodeEvents(on, config) {
            on("task", {
                queryDb: (query) => {
                    return queryTestDb(query, config);
                },
            });
        },
    }
})

const mysql = require("mysql");

function queryTestDb(query, config) {
    const connection = mysql.createConnection(config.env.db);
    connection.connect();
    return new Promise((resolve, reject) => {
        connection.query(query, (error, results) => {
            if (error) {
                reject(error);
            } else {
                connection.end();
                return resolve(results);
            }
        });
    });
}