import { Response, Request } from "express";
import app from "./src/app";
 
import { sequelize } from "./src/db";
 
const server = require('http').createServer(app);
const io =require('socket.io')(server,{cors:{origin: "*"}});
interface error {
	err: string
}

app.get('/', (req:Request,res:Response)=>{
    res.send('Allan Torres');
})

 
sequelize
.sync({ force: true, logging: false })
.then(() => {
    console.log('base de datos conectada! :D')
    server.listen(process.env.PORT || 3001, function () {
        console.log('App is listening on port 3001!');
    });
})
.catch((err: error) => console.error(err));