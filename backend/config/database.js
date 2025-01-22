const mongoose= require("mongoose");
require("dotenv").config();
const url = process.env.CONNECT_URL;
console.log(url);


const database = () => {
    mongoose.connect("mongodb+srv://suyashtonystark:suyashtonystark12@cluster0.yhoqsps.mongodb.net/spendwise",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(()=>{
        console.log("connected");
    }).catch((err)=>{
        console.error(err);
    })
}

module.exports=database;


