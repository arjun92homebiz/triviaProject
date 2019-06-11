"use-strict"
const express = require("express"); //need to require express, so create a variable
const router= express.Router(); 
const pool= require("./connection"); 

function selectAll(res) {
    pool.query("Select * from questions order by random() limit 10").then(result => {
        res.json(result.rows);
    });
};

router.get("/questions", (req, res) => {
    selectAll(res);
    // console.log(Get);
});

module.exports = router;