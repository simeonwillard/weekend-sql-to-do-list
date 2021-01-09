const express = require('express');
const router = express.Router();

const pool = require('../modules/pool.js');

router.get('/', (req, res) => {
    let queryText = `
        SELECT * FROM "list" ORDER BY "id";
    `;

    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((error) => {
        console.log('error in getting list from db', error);
        res.sendStatus(500);
    });
});


module.exports = router;