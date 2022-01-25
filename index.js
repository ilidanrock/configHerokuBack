const express =require('express');
const app = express();
const server = require('http').createServer(app);
const io =require('socket.io')(server,{cors:{origin: "*"}});
 

app.get('/', (req,res)=>{
    res.send('home');
})

server.listen(3001, ()=>{
    console.log("Server running...");
})
 