import { Response, Request } from "express";
const express =require('express');
import { sequelize } from "./src/db";
const app = express();
const server = require('http').createServer(app);
const io =require('socket.io')(server,{cors:{origin: "*"}});
 

app.get('/', (req:Request,res:Response)=>{
    res.send('home');
})

server.listen(process.env.PORT || 3001, ()=>{
    console.log("Server running...");
})
 