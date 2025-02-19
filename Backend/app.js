const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors())
const connectToDb = require("./DB/db");
const userRoutes = require("./Routes/user.routes");
const cookieParser = require('cookie-parser')

connectToDb();

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())


app.use('/users', userRoutes)
module.exports = app;