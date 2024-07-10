const express = require("express");
const cors = require("cors");
const app = express();
const model = require("./models/transactionModel")
const database = require("./config/database");
const dotenv= require("dotenv").config();

app.use(cors());
app.use(express.json());

database();

async function deleteData() {
   
    
    try {
        const deletionResult = await model.deleteMany();
        console.log("Data older than cutoff time removed successfully. Deletion result:", deletionResult);
    } catch (error) {
        console.error("Error deleting old data:", error);
    }
}
   setInterval(async()=>{
        console.log("Cron job executed!");
        await deleteData();
    },30*24*60*1000)


app.post("/", async (req, res) => {
    const result = await model.create(req.body)
    res.json({
        success: true,
        result
    })
});

app.get("/tranasction",async(req,res)=>{
   
    const detail=await model.find();
    res.send(detail);
    

    
})

process.on("unhandledRejection",(err)=>{
    console.log(err.message);
    console.log("the server is closing");
    server.close(()=>{
        process.exit(1);
    });
});

app.listen(process.env.PORT, () => {
    console.log("http://localhost:4000")
})