import express from "express"

const app=express();


app.get("/health",(req,res)=>{
    res.json({msg:"hello health is running"})
})

app.listen(5000,(req,res)=>{
    console.log("server is running")
})