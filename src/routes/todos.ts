import { Router } from "express";

import {
  createToDo,
  deleteToDo,
  getAllToDo,
  getTodoById,
  updateTodo
} from "../controller/todo";

const todoRouter = Router();

todoRouter.post("/", createToDo);

todoRouter.get("/", getAllToDo);

todoRouter.get("/:id", getTodoById);

todoRouter.put("/:id", updateTodo);

todoRouter.delete("/:id", deleteToDo);

export default todoRouter;
