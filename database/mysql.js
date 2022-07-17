const knex = require('knex')
const base = require('./selectdatabase')

const mysql = knex({
    client: 'mysql',
    connection: {
        host: base.Mhost,
        user: base.Muser,
        password: base.Mpassword,
        database: base.mysql,
        port:  base.Mport,
        multipleStatements: true
    }
})

module.exports = mysql