const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "senai",
  host: "localhost",
  port: 5432,
  database: "anuncios_db",
});

module.exports = pool;
