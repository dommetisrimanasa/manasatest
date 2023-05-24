var express=require("express")
app=express()
app.use(express.json())
var fs=require("fs")
// var sharp=require("sharp")
const mysql=require("mysql")
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"manasa@27",
    database:"databasa"
})
con.connect(function(err){
    if(err){
        console.log(err)
    }
    console.log("connection is online for mysql")
})
app.post("/uploadimg", (req, res) => {
    let sql = "insert into Image_Data(image)values('" + base64str + "');";
  con.query(sql, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});
app.post("/importimg",(req,res)=>{
    let sql="select image from Image_Data"
    con.query(sql,(err,result)=>{
            if (err)throw err;
            console.log(result[0].image)
            const data= result[0].image;
            const buffer = Buffer.from(data, "base64")
            fs.writeFileSync("new-path.jpg", buffer);
    })
})
function base64_encode(file) {
    var bitmap = fs.readFileSync(file);
    return new Buffer.from(bitmap).toString("base64");
}
//function convertBase64ToImage(base64String, imagePath) {
  //  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
    //const imageBuffer = Buffer.from(base64Data, 'base64');
//     fs.writeFileSync(imagePath, imageBuffer);
//     console.log('Image saved successfully!');
  
var base64str = base64_encode("baby.jpg");
//const base64String = 
//const imagePath = 'decoded.jpg';
//const base64str=""
//convertBase64ToImage(base64String, imagePath);
app.listen(8000,()=>{
    console.log("connection is stable")
})

'SELECT * FROM udetails  WHERE uemail = ? OR password = ? OR re_enterpassword =?'