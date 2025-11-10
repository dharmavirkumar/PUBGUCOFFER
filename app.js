require('dotenv').config()
require('./DB/shema');
require('./DB/db');
const { urlencoded } = require('body-parser');
const express = require('express');
const mongoose = require("mongoose");
const app = express();



app.use(express.static('public'));
app.set('view engine','ejs');
app.set(urlencoded({extended:true}));


const trySchema = mongoose.Schema({
    name:String,
    email:String,
    message:String
})

const tryModel = mongoose.model("tryModel",trySchema);



app.get("/",(req,res)=>{
    res.render("Home");
});
app.post("/",(req,res)=>{
 const {name,email,message}= req.body;
 res.render("Home");

})

app.get("/offer",(req,res)=>{
    res.render("OfferPage");
});

app.get("/buypage",(req,res)=>{
    res.render("BuyPage");
});
app.get("/Payment",(req,res)=>{
    res.render("Payment");
});
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})