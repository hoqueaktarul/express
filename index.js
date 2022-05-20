const express = require("express");
const midware=require('./midfunc')
const app=express()
// app.use('/api',midware)
app.use(midware)


app.get('/',(req,res)=>{
    
res.send("<h1>home page</h1>")
})

app.get('/about',(res,req)=>{
    req.send("<h1>this is a about page</h1>")
})
app.get('/contact' ,(res,req)=>{
    req.send("<h1>i am  contact page</h1>")
})
app.all('*',midware,(res,req)=>{
    req.status(404).send("<h1>page not found that you are looking</h1>")
})

app.listen(5000,()=>{
    console.log("serve rlisting .........")
})