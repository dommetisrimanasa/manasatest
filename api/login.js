var express = require("express")
var mysql = require("mysql")
var app = express()
app.use(express.json())

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "manasa@27",
    database: "Project"

})
con.connect(function (err) {
    if (err) {
        console.log(err)
    }
    console.log("connection is online for mysql")
})




app.post('/signup', (req, res) => {
    const { FirstName,LastName, email, password } = req.body;
    

    
    if (!FirstName || !LastName || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    
    con.query(
        'SELECT * FROM tbl_user WHERE FirstName = ? OR email = ?',
        [FirstName, email],
        (error, results) => {
            if (error) {
                console.error('Error executing the database query:', error);
                return res.status(500).json({ message: 'An error occurred' });
            }

            if (results.length > 0) {
                return res.status(400).json({ message: 'FirstName or email already exists' });
            }

            // Insert the new user into the database
            con.query(
                'INSERT INTO tbl_user (FirstName,LastName, email, password) VALUES (?, ?, ?,?)',
                [FirstName, LastName,email, password],
                (error) => {
                    if (error) {
                        console.error('Error executing the database query:', error);
                        return res.status(500).json({ message: 'An error occurred' });
                    }

                    return res.status(201).json({ message: 'User registered successfully' });
                }
            );
        }
    );
});

// app.post("/signup", (req, res) => {




//     console.log
// })

app.listen(8000, () => {
    console.log("connected")

})