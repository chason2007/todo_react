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

app.get("/api/v1/rest/:id", (req, res)=>{
    let id = parseInt(req.params.id);
    let restaurant = jsonData.find((el)=>el.id===id);
    if(!restaurant){
        return res.status(404).json({
            status: "failed",
            message: "Restaurant not found"
        })
    }
    res.status(200).json({
        status: "Successful",
        data: restaurant
    })
})


//post
app.post("/api/v1/rest", (req, res)=>{
    const id = jsonData.length;
    const restaurant = Object.assign({id:id}, req.body);
    jsonData.push(restaurant);
    fs.writeFile(
        "./Data.json",
        JSON.stringify(jsonData),
        "utf-8",
        (err)=>{
            if(err){
                return res.status(400).json({
                    status:"Failed to write",
                })
            }
            res.status(201).json({
                status: "True",
                data: restaurant,
            })
        }
    )
})

//update
app.put("/api/v1/rest/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const restaurantIndex = jsonData.findIndex((el)=>el.id === id);
    if(restaurantIndex === -1){
        return res.status(404).json({
            status: "failed",
            message: "Task not found"
        })
    }
    jsonData[restaurantIndex] = Object.assign({id: id}, req.body);
    fs.writeFile(
        "./Data.json",
        JSON.stringify(jsonData),
        "utf-8",
        (err)=>{
            if(err){
                return res.status(400).json({
                    status:"Failed to write",
                })
            }
            res.status(200).json({
                status: "Success",
                data: jsonData[restaurantIndex],
            })
        }
    )
})


//delete
app.delete("/api/v1/rest/:id", (req, res)=>{
    const restaurantId = parseInt(req.params.id);
    const restaurantIndex = jsonData.findIndex((el)=>el.id===restaurantId);
    if(restaurantIndex === -1){
        return res.status(404).json({
            status: "Fail",
            message: "Please check the ID",
        })
    }
    jsonData.splice(restaurantIndex, 1);
    fs.writeFile(
        "./Data.json",
        JSON.stringify(jsonData),
        "utf-8",
        (err)=>{
            if(err){
                return res.status(400).json({
                    status:"Failed to write",
                })
            }
            res.status(204).send()
        }
    )
})


app.listen(9000, ()=>
{
    console.log("Server started successfully"); 
})