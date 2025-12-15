const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.json());

const jsonData = JSON.parse(fs.readFileSync(
    "./Data.json"
))

//get
app.get("/api/v1/rest", (req, res)=>{
    res.status(200).json({
        status: "Sucessful",
        length: jsonData.length,
        data: {
            jsonData,
        }
    })
});

// app.get("/api/v1/rest/:id", (req, res)=>{
//     let id = parseInt(req.params.id);
//     let restaurant = jsonData.find((el)=>el.id===id);
//     if(!restaurant){
//         return res.status(404).json({
//             status: "failed",
//             message: "Restaurant not found"
//         })
//     }
//     res.status(200).json({
//         status: "Successful",
//         data: restaurant
//     })
// })

app.listen(9000, ()=>
{
    console.log("Server started successfully"); 
})