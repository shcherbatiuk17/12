const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const dbConnection = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = { dbConnection };
