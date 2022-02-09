const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "dpifsa8x",
  host: "localhost",
  port: "5432",
  database: "anuncios",
});

module.exports = pool;
