const mongoose=require("mongoose");
require("dotenv").config();
const url= process.env.CONNECT_URI;


const database=()=>{
    mongoose.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("connected");
    }).catch((err)=>{
        console.error(err);
    })
}

module.exports=database;


