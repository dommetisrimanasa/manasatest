var express = require("express")
var mysql = require("mysql")
var app = express()
app.use(express.json())

const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"manasa@27",
    database:"ecommerce"

})
con.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log("connection is online for mysql")
})

app.post("/text",(req,res)=>{
    let s="select * from tbl_order"
    
    con.query(s,(err,result)=>{
        if(err) throw err;
        console.log(result)
        res.send(result)
    })
})



app.listen(8000,()=>{
    console.log("company")

})

