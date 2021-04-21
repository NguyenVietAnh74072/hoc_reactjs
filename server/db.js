const Pool = require("pg").Pool;

const pool = new Pool(
    {
        user:'postgres',
        password:"vietanh1999",
        host: 'localhost',
        port:5432,
        database:"Test"



    }
);

module.exports = pool;