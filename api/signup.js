var express = require("express")
var app = express()
var mysql = require("mysql")
app.use(express.json())
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manasa@27",
    database: "hecto"

})
con.connect(function (err) {
    if (err) {
        console.log(err)
    }
    console.log("connection is online for mysql")
})



app.post("/manasa1", (req, res) => {
    const { uemail, password, re_enterpassword, } = req.body
    var s = 'call manasa1("' + uemail + '","' + password + '","' + re_enterpassword + '");'
    if (!uemail || !password || !re_enterpassword) {
        return res.status(400).json({ message: 'Required field is blank' })
    }
    con.query(
        's',
        [uemail, password, re_enterpassword],
        (error, results) => {
            if (error) {
                console.error('Error executing the database query:', error);
                return res.status(500).json({ message: 'password is not matching' });
            }
        })
    if (password == re_enterpassword) {
        return res.status(200).json({ message: "Registration successful" });
    }
})
con.query(
    'inster into registration (uemail,password,re_enterpassword) values(?,?,?)',
    (error) =>{
        if (error){
            console.error('Error executing the database query:', error );
        return res.status((500).json({ message: 'An error occurred' }));

        }

    }
              

)





app.listen(8000, () => {
    console.log("connected")

})


