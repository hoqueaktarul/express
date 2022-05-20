const app=require("express")();
const {readFileSync}=require("fs")
const html=readFileSync('./navbar/oneNavbar.html',"utf8")

app.get('/',(req,res)=>{
    res.write(html)
    res.end("<h1>this is home page0</h1>")
})
app.get('/about',(req,res)=>{
    res.write(html)

    res.end(`<p class='btn btn-red'>about page</p>`)
})
app.all('*',(req,res)=>{
    
    res.status(404).send("<h1>page not found</>")
})
app.listen(5000,()=>{
    
console.log("server listening......")
})
