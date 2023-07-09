const {Pool} = require('pg')

const pool = new Pool({
    user: process.env.user || 'postgres',
    host: process.env.host  || 'localhost',
    database: process.env.database || 'biblioteca',
    password: process.env.password || '102002',
    port: process.env.port || '5432'
})

module.exports = {
    pool
}