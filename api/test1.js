var  express = require("express")
var app = express()

app.use(express.json())
app.post("/add",(req,res)=>{
    s = req.body.e;
    m = req.body.w;
    console.log(s+m+"");
    res.send(s+m+"")
})
app.post("/sub",(req,res)=>{
    sub = req.body.e;
    sub1 = req.body.w;
    console.log(sub-sub1+"");
    res.send(sub-sub1+"")
})
app.post("/mul",(req,res)=>{
    mul = req.body.e;
    mul1 = req.body.w;
    console.log(mul*mul1+"")
    res.send(mul*mul1+"")
})
app.post("/text",(req,res)=>{
    t = req.body.e;
    console.log("error")
    res.send("error")
})



app.listen(8000,()=>{
    console.log("this is api")
})