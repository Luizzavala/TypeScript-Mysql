// this imports is sequelize ORM
import {
Table,
Model,
Column,
DataType
} from "sequelize-typescript";

/* A decorator that tells Sequelize that this class is a table in the database. */
@Table({
  timestamps: false,
  tableName: "todos"
})

/* The Todos class extends the Model class from Sequelize. It has two properties, name and description,
which are both strings */
export class Todos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;
}
