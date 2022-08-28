import { RequestHandler } from "express";

import { Todos } from "../models/todo";

// Create a new Todo
export const createToDo: RequestHandler = async (req, res, next) => {
  var todos = await Todos.create({ ...req.body });

  return res.status(200)
    .json({ message: "Todo created successfully", data: todos });
};

// Delete by Id
export const deleteToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedToDo: Todos | null = await Todos.findByPk(id);

  await Todos.destroy({ where: { id } });

  return res.status(200)
    .json({ message: "Todo deleted successfully", data: deletedToDo });
};
// getall
export const getAllToDo: RequestHandler = async (req, res, next) => {
  const allToDos: Todos[] = await Todos.findAll();

  return res.status(200)
    .json({ message: "Todo fetched successfully", data: allToDos });
};

// Get by Id
export const getTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todos: Todos | null = await Todos.findByPk(id);

  return res.status(200)
    .json({ message: "Todo Fetched successfully", data: todos });
};

// updateTodo by Id
export const updateTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Todos.update({ ...req.body }, { where: { id } });
  const updateTodos: Todos | null = await Todos.findByPk(id);

  return res.status(200)
    .json({ message: "Todo update successfully", data: updateTodos });
};
