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

// adding tasks to db
router.post('/', (req, res) => {
    console.log(req.body);

    const newTask = req.body;

    const queryText = `
        INSERT INTO "list" ("task")
        VALUES ($1);
    `;

    pool.query(queryText, [newTask.task])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

// Updating db with completed status
router.put('/:id', (req, res) => {
    const id = req.params.id;

    const completedStatus = req.body.finished;
    console.log(completedStatus);

    const queryText = `UPDATE "list" SET "completed" = $1 WHERE "id" = $2;`;

    pool.query(queryText, [completedStatus, id])
    .then((result) => {
        console.log(result);
        res.sendStatus(200);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    })
})



// deleting tasks from db
router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Delete route called with id of: ', id);

    const queryText = `DELETE FROM "list" WHERE "id" = $1`;

    pool.query(queryText, [id])
    .then((result) => {
        res.sendStatus(204);
    }).catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});


module.exports = router;