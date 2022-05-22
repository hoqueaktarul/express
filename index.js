const express=require('express')
const path=require('path')
const {people}=require("./data")

const app=express()
app.use(express.static("./public"))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
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
app.post("/login",(req,res)=>{
    const {name,email}=req.body
    if(name&&email){
        return res.status(200).send(`<h1>hello ${name} , YOU ARE LOG IN . and note that your email id is ${email.toUpperCase()}</h1>`)
    }
    res.status(404).send(`<h1>please fill the previous form</h1>`)
})
app.get("/api/people",(req,res)=>{
    res.status(200).json({success:true ,data:people})
})
app.post("/api/people",(req,res)=>{
    const {name}=req.body
    if(!name){
        res.status(400).json({success:false,msg:"please fill the form first"})
    }
    res.status(201).send({success:true,person:name})
})
app.get('*',(req,res)=>{
    res.status(404).send(`<h1>"${req.url.toUpperCase()}" , this url not found</h1>`)
})



app.listen(5000,()=>{
    console.log("server is listing correctly")
})