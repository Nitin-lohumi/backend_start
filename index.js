require('dotenv').config();
const server = require('http').createServer();
let express  = require('express');
let app = express();
let port =process.env.PORT||1000;
app.get('/',(req,res)=>{
    res.send("your name is nitin and this is your frist server side");
});
app.listen(port,()=>{
    console.log(`....${port}`);
});