const express=require("express");
const app=require("express")();

const {readFileSync}=require("fs");
const path = require("path");
const html=readFileSync('./navbar/oneNavbar.html',"utf8")
app.use(express.static('./navbar'))

app.get('/',(req,res)=>{
    res.write([html,html])

    res.end("<h1>this is home page0</h1>")

    
})
app.get('/about',(req,res)=>{
    res.write(html)

    res.end(`<p class='btn btn-red'>about page</p>`)

})
app.get('/nav',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
})
app.all('*',(req,res)=>{
    
    res.status(404).send("<h1>page not found</>")
})

app.listen(5000,()=>{
    
console.log("server listening......")
})
