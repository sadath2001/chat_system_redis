const express=require('express')
const {createServer} =require('node:http');
const app=express()
const port=4000
server=createServer(app)
app.get('/',(req,res)=>{
res.send('<h1>Hey bro</h1>')
})

Server.listen(port,()=>{
    console.log(`listening on: ${port}`)
})