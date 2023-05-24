const express = require("express");
const app = express();
const mysql = require("mysql");
app.use(express.json());
const jwt = require("jsonwebtoken");
const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manasa@27",
  database: "project",
});
con.connect((err) => {
  if (err) throw err;
  console.log("Connected");
});
function tokenVerify(req, res, next) {
    const bearerHeader = req.headers.token;
    var sk=req.body.email
    console.log(bearerHeader)
    if (typeof bearerHeader !== "undefined") {
      jwt.verify(bearerHeader, sk, (err, authData) => {
        if (err) {
          res.sendStatus(403);
        } else {
          next();
        }
      });
    } else {
      res.sendStatus(403);
    }
}
app.post("/logincheck", (req, res) => {
    var tok;
    var id=req.body.id
    let sql = "select * from tbl_user where id=('"+id+"')";
    
    con.query(sql, (err, result) => {
      if (err){ throw err }
      else{
      var res1=result[0]
      console.log(res1)
      jwt.sign({ user: res1 }, res1.Email, (err, token) => {
        if(err) throw err;
        console.log("hi")
        tok=token
        console.log(token)
        const temp={"result":res1,"token":tok}
        res.send(temp)
        });
    }
    })
})
app.post("/getdata", tokenVerify, (req, resp) => {
    var id=req.body.id
    let sql = "select * from tbl_user where id=('"+id+"') ";
    con.query(sql, (err, result) => {
      if (err){ throw err }
      else{
      var res1=result[0]
      console.log(res1)
      resp.json({"user is authenticated":res1});
      }})
});
app.listen(8000, () => {
  console.log("listening to 8000");
});






