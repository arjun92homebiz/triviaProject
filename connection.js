"use strict";

const { Pool } = require("pg");

const credentials = {
    user: "postgres",
    password: "password",
    host: "localhost",
    port: 5433,
    database: "TriviaDB",
    ssl: false
};

module.exports = new Pool (credentials);