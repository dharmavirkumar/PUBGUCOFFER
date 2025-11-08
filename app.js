const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();

const PORT =  process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine','ejs');
app.set(urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("Home");
});
app.get("/",(req,res)=>{
    res.render("Home");
});

app.get("/offer",(req,res)=>{
    res.render("OfferPage");
});

app.get("/buypage",(req,res)=>{
    res.render("BuyPage");
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})