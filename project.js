const express=require('express')
const path=require('path')

const app=express()
app.use(express.static("./public"))
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./navbar/navindex.html"))
})
app.get("/about",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./navbar/about.html"))
})
app.get("/javascript",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./form/formjs.html"))
})
app.get("/regular",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./form/formindex.html"))
})

app.listen(5000,()=>{
    console.log("server is listing")
})