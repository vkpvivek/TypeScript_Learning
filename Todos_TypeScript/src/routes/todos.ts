import { Router } from "express";
import {Todo} from '../models/todo';
import { text } from "body-parser";
import { type } from "os";

let todos: Todo[]= [];
type RequestBody ={text :string};
type RequestParams ={todoId :string};

const router=Router();

//Get
router.get('/test',(req,res,next)=>{
    res.send("test");
});

//Get
router.get('/',(req,res,next)=>{
    res.status(200).json({message:"todo data",todos:todos});
});

//Post
router.post('/todo',(req,res,next)=>{
    const body=req.body as RequestBody;
    const newTodo:Todo={
        id: new Date().toISOString(),
        text: body.text
    };

    todos.push(newTodo);
    res.status(201).json({message:'Added Todo',todo:newTodo, todos:todos});

});

//Put
router.put('/todo/:todoId',(req,res,next)=>{
    const params=req.params as RequestParams;
    const body= req.body as RequestBody;

    const tId= params.todoId;
    const todoIndex=todos.findIndex((todoItem)=> todoItem.id===tId);

    if(todoIndex>=0){
        todos[todoIndex]={  id: todos[todoIndex].id, text: body.text };
        return res.status(200).json({message:'Update todo',todos:todos});
    }
    res.status(404).json({message:'Could not find todo for this id'});

});

//Delete
router.delete('/todo/:todoId',(req,res,next)=>{
    const params=req.params as RequestParams;

    todos= todos.filter((todoItem)=>todoItem.id != params.todoId);
    res.status(200).json({message:'Deleted todo', todos:todos});

});

export default router;