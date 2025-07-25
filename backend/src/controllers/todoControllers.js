import Todo from "../models/todoModel.js";


export const AddTodo=async(req,res)=>{
   try{
     const todo = await req.body
     const newTodo = new Todo(todo);
  const savedTodo = await newTodo.save();
     res.status(201).json(savedTodo)}
   catch(error){
    console.log("Add todo ka error",error)
    res.status(400).json({
        message:'Failed to add todo'
    })
   }
}

export const getTodo =async(req,res)=>{
   try{
     const todo = await Todo.find()
     res.status(201).json(todo)}
   catch(error){
    console.log("get todo ka error",error)
    res.status(400).json({
        message:'Failed to Get todo'
    })
   }
}


export const updateTodo =async(req,res)=>{
   try{
    const id = req.params.id
     const updates = req.body
     const upadtedTodo =await Todo.findByIdAndUpdate(id,{$set:updates},{new:true})
     res.status(201).json(upadtedTodo)}
   catch(error){
    console.log("update todo ka error",error)
    res.status(400).json({
        message:'Failed to upadte todo'
    })
   }
}


export const deleteTodo =async(req,res)=>{
   try{
     const id =req.params.id
     const deletedTodo = await Todo.findByIdAndDelete(id)     
     res.status(201).json(deletedTodo)
    }
   catch(error){
    console.log("get todo ka error",error)
    res.status(400).json({
        message:'Failed to delete todo'
    })
   }
}

