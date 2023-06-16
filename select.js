const db = require("./db");

const sql = "SELECT * FROM feedbacks";

db.all(sql, (err, rows) => {
  if (err) throw err;

  if (rows.length > 1) {
    // cetak isi rows
    rows.forEach((feed) => {
      console.log(`${feed.name}, ${feed.email}, ${feed.message}`);
    });
  } else {
    console.log("tidak ada data/hasil");
  }
});

db.close();