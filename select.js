var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT name, address FROM customers", function (err, result, fields) {
//       if (err) throw err;
//     //   console.log(result);
//       console.log(result[2].address);
//     });
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT name, address,Email FROM customers", function (err, result, fields) {
      if (err) throw err;
      console.log(fields);
    });
});
