//generar nuestra conexion con la db!
require("dotenv").config();
import { Sequelize } from 'sequelize-typescript';
 
export const sequelize = new Sequelize({
	dialect: 'postgres',
	 database: process.env.DB_NAME,
     password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
	storage: ':memory:',
	models: [__dirname + '/models'],
});