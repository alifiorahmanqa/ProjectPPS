
const express = require('express');
const app = express();
const path = require('path');
const db = require("./db");
var bodyParser = require('body-parser');
// Menetapkan direktori statis untuk file CSS
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/service.html'));
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.post('/add', function(req,res){
  console.log('test')
  console.log(req.body)
  db.serialize(()=>{
    db.run('INSERT INTO feedbacks(name, email, message) VALUES(?, ?, ?)', [req.body.name, req.body.email, req.body.message], function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log("New feedbacks has been added");
      res.send("New feedbacks has been added into the database with Name = "+req.body.name);
    });
});
});
