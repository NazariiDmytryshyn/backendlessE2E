const { result } = require('cypress/types/lodash');
const Mailosaur = require('mailosaur');

module.exports = (on, config) => {
    const mysql = require('mysql')

    function queryTestDb(query, config) {
        const connection = mysql.createConnection(config.env.db)
        connection.connect()
        return new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    reject(error)
                } else {
                    connection.end()
                    return resolve(results)
                }
            })
        })
    }
    on('task', { queryDb: query => { return queryTestDb(query, config) }, });
};