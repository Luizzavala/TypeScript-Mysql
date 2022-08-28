import {Sequelize} from 'sequelize-typescript';
import { Todos } from '../models/todo';


const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "todo",
  logging: false,
  models:[Todos]
});

export default connection;
