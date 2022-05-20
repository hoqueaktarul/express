const app=require("express")()
const data=require('./data.js')
app.get('/',(req,res)=>{
    res.send("<h1>i am home page</h1><a href='api/product'>go to api</a>")
})
app.get('/api/product',(req,res)=>{
    const {limit}=req.query

    const newdata=data.map((e)=>{
       const  {name,title}=e
       return {name,title}

    })
    
    res.json(newdata.slice(0,limit))
})
app.get('/api/product/:any',(req,res)=>{
    const {any}=req.params
    const singlep=data.find((e)=>{
        return e.id===Number(any)
    })
    console.log(req.query)
    if(!singlep){
        res.status(404).send('<h1>product not found</h1>')
    }
    res.json(singlep)
})
app.all('*',(req,res)=>{res.status(404).send("<h1>page not found</h1>")})

app.listen(5000,()=>{
    console.log("listing server ...")
    console.log(data)
})