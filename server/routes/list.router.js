const express = require('express');
const router = express.Router();

// connects to db
const pool = require('../modules/pool.js');

// gets table from db
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