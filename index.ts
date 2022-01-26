import { Response, Request } from "express";
import app from "./src/app";
const express =require('express');
import { sequelize } from "./src/db";
 
const server = require('http').createServer(app);
const io =require('socket.io')(server,{cors:{origin: "*"}});
 

app.get('/', (req:Request,res:Response)=>{
    res.send('home');
})

server.listen(process.env.PORT || 3001, ()=>{
    console.log("Server running...");
})
 