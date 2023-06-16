const db = require("./db");

let sql = `CREATE TABLE IF NOT EXISTS feedbacks(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(64),
        email VARCHAR(64),
        message VARCHAR(64)
    );`;
db.run(sql, (err, result) => {
  if (err) throw err;
  console.log("Table created");
});

db.close();