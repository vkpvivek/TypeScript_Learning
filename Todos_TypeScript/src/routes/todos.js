"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
//Get
router.get('/test', (req, res, next) => {
    res.send("test");
});
//Get
router.get('/', (req, res, next) => {
    res.status(200).json({ message: "todo data", todos: todos });
});
//Post
router.post('/todo', (req, res, next) => {
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
});
//Put
router.put('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    const body = req.body;
    const tId = params.todoId;
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === tId);
    if (todoIndex >= 0) {
        todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({ message: 'Update todo', todos: todos });
    }
    res.status(404).json({ message: 'Could not find todo for this id' });
});
//Delete
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id != params.todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
exports.default = router;
