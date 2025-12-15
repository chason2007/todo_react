const { log } = require("console");
const express = require("express");
const app = express();
const fs = require("fs");
app.use(express.json);

const jsonData = JSON.parse(fs.readFileSync(
    "./Tasks.json"
))
console.log(jsonData)

//CRUD operations
//1. C- Creation post
//2. R- Read get
//3. U- Update put and patch
//4. D- Delete


//api
//get
app.get("/api/v1/tasks", (req, res)=>{
    res.status(200).json({
        status: "Sucessful",
        length: jsonData.length,
        data: {
            jsonData,
        }
    })
});

//post
app.post("/api/v1/tasks", (req, res)=>{
    const id = jsonData.length;
    const task = Object.assign({id:id}, req.body);
    jsonData.push(task);
    fs.writeFile(
        "/Tasks.json",
        JSON.stringify(jsonData),
        "utf-8",
        (err)=>{
            if(err){
                res.status(400).json({
                    status:"Failed to write",
                })
            }
            res.status(201).json({
                status: "True",
                data: task,
            })
        }
    )
    console.log(req.body);
})

//retrieve single object data
app.get("/api/v1/tasks/:id", (req, res)=>{
    let id = req.params.id;
    let task = jsonData.find((el)=>el.id==id);
    if(!task){
        res.status(404).json({
            status: "failed",
            message: "check your task id"
        })
    }
    res.status(200).json({
        status: "Successful",
        task
    })
})

app.listen(9000, ()=>
{
    console.log("Server started successfully");
    
})