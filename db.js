var Pool = require("pg").Pool

var pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: "5432",
    database: "university"
});
module.exports = pool;
console.log("Connected to db");