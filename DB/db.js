
const mongodb = require("mongoose");
mongodb.connect(process.env.MONGODB_URL)
.then(()=>{console.log("Connection Successfull")})
.catch(()=>{console.log("No Connection")})
module.exports = mongodb;