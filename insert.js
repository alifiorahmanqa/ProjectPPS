const db = require("./db");

const sql = `INSERT INTO feedbacks (name, email, message) VALUES (?,?,?)`;
const stmt = db.prepare(sql);
const songs = [
  ["Dear God", "Avenged Sevenfold", "test"]
];

songs.forEach((song) => {
  stmt.run(song, (err) => {
    if (err) throw err;
  });
});

console.log(`${songs.length} record inserted`);
stmt.finalize();

db.close();