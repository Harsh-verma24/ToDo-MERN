import React from "react";
import { Footer, InputBox, Navbar, Todo } from "../components";
import { fetchTodo } from "../api/TodoApi";
import { useState,useEffect } from "react";
export const Home = () => {
  // const todos = fetchTodo()
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const data = await fetchTodo();  // wait for API to return todos
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <div className="divider divider-accent"></div>
      <InputBox />
      <div className="flex flex-col items-center gap-y-2 place-content-center my-10">
        <button onClick={getTodos} className="btn btn-soft btn-accent">
          Refresh
        </button>
        {todos.map((todo)=>(
          <Todo key={todo._id} completed={todo.completed} id={todo._id} todoctn={todo.title}/>
        ))}
      </div>
    </div>
  );
};
export default Home;
