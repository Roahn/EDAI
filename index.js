//********************************************************************** */
/*
Rohan Magar
Ankit Mahalpure
Keshav Sarda
Tarun Lodha



Useful Links :
Inserting into database
https://www.youtube.com/watch?v=lldeWkkG9xA

*/



/**************************************************************************** */







// Importing modules

//ormdata
//console.log(formdata);
const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => {

// Sending our index.html file as
// response. In path.join() method
// __dirname is the directory where
// our app.js file is present. In
// this case __dirname is the root
// folder of the project.
res.sendFile(path.join(__dirname, '/index.html'));
});
//** */

app.use(express.urlencoded({extended:false}));

app.use(express.json());


app.post('/add', (req, res) => {

    var a = req.body.username;
    var b = req.body.password;
   console.log(a,b);
   var sql = "INSERT INTO user(username,password) VALUES "+"("  +"'"+a+"'"+",'"+b+"'"+    ")";
    con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");

    
  });

  res.send('Send !!!');
  res.end();
});



var mysql = require('mysql');
const { Console } = require('console');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database:"mydb1"
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
   
});






//con.end();
app.listen(3000, () => {
console.log('Server is up on port http://localhost:3000/');
});
