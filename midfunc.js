const midware=(req,res,next)=>{
    const method=req.method
    const url=req.url
    const time=new Date()
    const fulltime=time.getHours()+":"+time.getMinutes()+":"+time.getSeconds()
    console.log(method,url,fulltime)
    // console.log(fulltime)
    // res.send("testing")
    next()

}
const authorize=(req,res,next)=>{
    const {name,age}=req.query
    if(age>18){
        console.log("authorise")
    next()

    }
    else{
        console.log("not autthorise")
        res.status(404).send("<h1>Unauthorize</h1>")
    next()

    }
}
module.exports={midware,authorize}
