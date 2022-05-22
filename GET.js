const express=require('express')
const res = require('express/lib/response')
const data=require('./data')
const {readFileSync}=require('fs')
const path  = require("path")
const jso=readFileSync("./json.json",'utf8')
const app=express()
app.get("/",(req,res)=>{
    res.send("<h1>i am home page</h1>")
})
app.get("/api/people",(req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname,"./json.json"))
})
app.all("*",(req,res)=>{
    res.send("<h1>page not found</h1>")
})
app.listen(5000,()=>{
    console.log("server is listing")
})