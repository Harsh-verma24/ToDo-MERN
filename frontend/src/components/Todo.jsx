import React, { useState } from "react";
import { Trash, CircleCheck } from "lucide-react";
import { deleteTodo, updateTodo } from "../api/TodoApi";
import toast from "react-hot-toast";

function Todo({ todoctn, id, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed || false);

  const updates = async () => {
    const newCompleted = !isCompleted;
    setIsCompleted(newCompleted);

    try {
      const ctn = {
        title: todoctn, // ✅ required by Mongoose schema
        completed: newCompleted, // ✅ actual status update
      };

      await updateTodo(id, ctn);
     if(newCompleted){ toast.success("To do marked as Completed");}
     else{toast.success("To do marked as Incomplete")}
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Update failed");
    }
  };

  const deleteHandler = async (id) => {
    try {
      await deleteTodo(id);
      toast.success("Deleted successfully");
    } catch (error) {
      console.error("Delete error:", error);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="flex gap-2 items-center justify-center">
      <input
        disabled
        type="text"
        value={todoctn}
        className={`input input-accent ${
          isCompleted ? "bg-green-600 text-white line-through" : ""
        }`}
        style={{
          backgroundColor: isCompleted ? "#16a34a" : "", // fallback if Tailwind class fails
          color: isCompleted ? "white" : "",
          textDecoration: isCompleted ? "line-through" : "",
        }}
      />
      <button onClick={updates} className="btn btn-soft btn-accent">
        <CircleCheck />
      </button>
      <button
        onClick={() => deleteHandler(id)}
        className="btn btn-soft btn-accent"
      >
        <Trash />
      </button>
    </div>
  );
}

export default Todo;
