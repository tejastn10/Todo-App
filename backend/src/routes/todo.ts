import { Router } from "express";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todo";

const router: Router = Router();

// @route   Get /todos
// @desc    Get all Todos
router.get("/todos", getTodos);

// @route   Post /add-todo
// @desc    Add a new Todo
router.post("/add-todo", addTodo);

// @route   Put /edit-todo/:id
// @desc    Edit a Todo
router.put("/edit-todo/:id", updateTodo);

// @route   Delete /delete-todo/:id
// @desc    Delete a Todo
router.delete("/delete-todo/:id", deleteTodo);

export { router };
