const pg = require('pg');
const Pool = pg.Pool;

const config = {
    database: 'todo_list',
    host: 'localhost',
    port: 5432
};

const pool = new Pool(config);

pool.on('connect', () => {
    console.log('PG connected');
});

pool.on('error', (error) => {
    console.log(error);
});

module.exports = pool;
