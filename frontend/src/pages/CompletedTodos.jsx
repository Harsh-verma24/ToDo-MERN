import React from "react";
import { useState, useEffect } from "react";
import { Todo } from "../components";
import { fetchTodo } from "../api/TodoApi";
const CompletedTodos = () => {
  const [todos, setTodos] = useState([]);
  //   const [filterTodos, setFilterTodos] = useState([]);

  const getTodos = async () => {
    try {
      const data = await fetchTodo(); // wait for API to return todos
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };
  const filterList = todos.filter((todo) => {
    if (todo.completed === true) {
      return todo;
    }
  });
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      <div className="flex flex-col items-center gap-y-2 place-content-center my-10">
        <button onClick={getTodos} className="btn btn-soft btn-accent">
          Refresh
        </button>
        {filterList.map((todo) => (
          <Todo
            key={todo._id}
            completed={todo.completed}
            id={todo._id}
            todoctn={todo.title}
          />
        ))}
      </div>
    </div>
  );
};

export default CompletedTodos;
