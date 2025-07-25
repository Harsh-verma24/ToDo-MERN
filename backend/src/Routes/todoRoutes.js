import express from 'express'
import { Router } from 'express'
import { AddTodo, deleteTodo, getTodo, updateTodo } from '../controllers/todoControllers.js';

const routes = new Router();

routes.post('/todos',AddTodo)
routes.get('/todos',getTodo)
routes.put('/todos/:id',updateTodo)
routes.delete('/todos/:id',deleteTodo)


export default routes;
