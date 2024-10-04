const express=require('express')
const {createServer} =require('node:http');
const {join}=require('node:path')
const {Server}=require('socket.io');
const app=express()
const port=4000
const server=createServer(app)
const io=new Server(server)

app.get('/',(req,res)=>{
res.sendFile(join(__dirname,'../index.html'))
})


io.on('connection',(socket)=>{
    console.log('user connected: ',socket.id)
    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })
})
server.listen(port,()=>{
    console.log(`listening on: ${port}`)
})