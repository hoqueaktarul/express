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
module.exports=midware
