//generar nuestra conexion con la db!
require("dotenv").config();

import { Sequelize } from 'sequelize-typescript';
 //var env = process.env.NODE_ENV || 'development';
 const { DB_NAME,DB_USER, DB_PASSWORD, DB_HOST } = process.env;
 export const sequelize =
 process.env.NODE_ENV === "production"
   ? new Sequelize({
	   database: 'dff0hq6n5diohm',
	   dialect: "postgres",
	   host: 'ec2-54-224-64-114.compute-1.amazonaws.com',
	   port: 5432,
	   username: 'dybhyljuusnpkx',
	   password: '5e4f662401dea8ac7e9a9aad871b657cdf9872f4568f71db6ea12cdffaf82aef',
	   storage: ':memory:',
	   models: [__dirname + '/models'],
	   pool: {
		 max: 3,
		 min: 1,
		 idle: 10000,
	   },
	   dialectOptions: {
		 ssl: {
		   require: true,
		   // Ref.: https://github.com/brianc/node-postgres/issues/2009
		   rejectUnauthorized: false,
		 },
		 keepAlive: true,
	   },
	   ssl: true,
	 })
   : new Sequelize(
	  {
		dialect: 'postgres',
		database: process.env.DB_NAME,
		password: process.env.DB_PASSWORD,
	   username: process.env.DB_USER,
	   storage: ':memory:',
	   models: [__dirname + '/models'],

	  }
	 );


// export const sequelize = new Sequelize({
// 	dialect: 'postgres',
// 	 database: process.env.DB_NAME,
//      password: process.env.DB_PASSWORD,
//     username: process.env.DB_USER,
// 	storage: ':memory:',
// 	models: [__dirname + '/models'],
// });

// 	{
// 		development: {
// 	dialect: 'postgres',
// 	 database: process.env.DB_NAME,
//      password: process.env.DB_PASSWORD,
//     username: process.env.DB_USER,
// 	storage: ':memory:',
// 	models: [__dirname + '/models'],
// 	},  production: {
// 		username: process.env.DB_USER,
// 		password: process.env.DB_PASSWORD,
// 		database: process.env.DB_NAME,
// 		host:  process.env.API_HOST,
// 		dialect:'postgres',
// 		operatorsAliases: false,
// 		use_env_variable:process.env.CORS
// 	  }
// }