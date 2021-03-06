"use strict";
const express = require("express"); 
const router= express.Router(); 
const pool= require("./connection");

function selectAll(res) {
    pool.query("Select * from scores").then(result => {
        res.json(result.rows);
    });
};

router.get("/scores", (req, res) => {
    selectAll(res);
    // console.log(Get);
});
    
router.post("/scores", (req, res) => {
    pool
    .query("insert into scores (username, scores) values ($1::text, $2::text)",[
        req.body.username,
        req.body.scores,
    ]).then(() => {
        selectAll(res);
    });
});

module.exports = router;