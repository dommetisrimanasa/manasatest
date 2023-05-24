var express=require("express")
app=express()
app.use(express.json())
const mysql=require("mysql")
​
app.listen(8000,()=>{
    console.log("connection is stable")
})
​
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"manasa@27",
    database:"hecto"
})
con.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log("connection is online for mysql")
    
})
​
app.post('/details',(req,res)=>{
    let prod_id=req.body.product_id
    let user_id=req.body.user_id
    let s='call det("'+prod_id+'");'
    con.query(s,(err,result)=>{
        if(err){
            throw err
        }
        console.log(result)
        res.send(result)
​
    })
})
​
app.post('/display',(req,res)=>{
    let tab_name=req.body.table_name
    let s='select * from '+tab_name+';'
    con.query(s,(err,result)=>{
        if(err){
            
        throw err
        }
        console.log(result)
        res.send(result)
​
    })
})
​
/*  wishlist */
​
app.post('/home/wishlist',(req,res)=>{
    var condition=req.body.condition
    var user_id=req.body.user_id
    if(condition=="list"){
        var s='select * from wishlist where refuser_id="'+user_id+'";'
        con.query(s,(err,result)=>{
            if(err){
                throw err
            }
            console.log(result)
            res.send(result)
    
        })
    }
    else if(condition=="add"){
        var prod_name=req.body.product_name
        var user_id=req.body.user_id
        var s='call atw ("'+prod_name+'","'+user_id+'");'
        con.query(s,(err,result)=>{
            if(err){
                throw err
            }
            console.log("added successfully")
            res.send("added successfully")
    
        })
    }
    else if(condition=="remove"){
        var prod_name=req.body.product_name
        var user_id=req.body.user_id
        var s='delete from wishlist where product_name="'+prod_name+'"and refuser_id ="'+user_id+'";'
        con.query(s,(err,result)=>{
            if(err){
                throw err
            }
            console.log(result)
            res.send(result)
    
        })
    }
​
})
​
/*     signup */
app.post('/signup',(req,res)=>{
    email=req.body.email
    password=req.body.password
    password1=req.body.password1
    let s='call signup("'+email+'","'+password+'","'+password1+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})
​
/* login */
​
app.post('/login',(req,res)=>{
    email=req.body.email
    password=req.body.password
    let s='call login("'+email+'","'+password+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})
​
/*  add to cart  */
​
app.post('/home/addto_cart',(req,res)=>{
    email=req.body.email
    quantity=req.body.quantity
    product_name=req.body.product_name
    let s='call addto_cart("'+email+'","'+quantity+'","'+product_name+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})
​
/* subscription */
​
app.post('home/subscription',(req,res)=>{
    let email=req.body.email
    let id = req.body.id
    let subscription_status=req.body.subscription_status
    let s = 'call sub_pro("'+id+'","'+email+'","'+subscription_status+'");'
    con.query(s,(err,result)=>{
        if(err) throw err
        console.log("updated")
        res.send("updated")
    })
    
})
​
/*  search */
​
app.post('/search',(req,res)=>{
    product_name=req.body.product_name
    category=req.body.category
    let s='call search("'+product_name+'", "'+category+'")'
    con.query(s,(err,result)=>{
        if(err)throw err
        console.log(result)
        res.send(result)
    })
})




























app.listen(8000,()=>{
    console.log("connection is stable")
})