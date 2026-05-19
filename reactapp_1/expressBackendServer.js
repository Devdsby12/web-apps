import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
app.get("/fivestar/post",(req,res)=>{
    res.send("hello")
})
app.get("/fivestar/post/add" , (req,res)=>{
    res.send({
    status : "ok" ,
   success: true,
   message: "Data fetched",
   user: "dev"
})
})
app.listen(3000 ,()=>{console.log("started server ")})
