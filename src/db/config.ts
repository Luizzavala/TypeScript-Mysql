import { Sequelize } from 'sequelize-typescript';
import { Todos } from '../models/todo';
import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;

const SERVER = {
  hostname : SERVER_HOSTNAME,
  port : SERVER_PORT
}

const config = {
  server : SERVER
}



const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "todo",
  logging: false,
  models: [Todos]
});

export {connection, config} ;
