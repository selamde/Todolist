import { db } from "@/server/db";
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = async () => {
  const todo = await db.todo.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="flex-1">
      <ul className="flex flex-col justify-start">
        <h1 className="text-center text-5xl font-bold text-blue-500">
          Tasks to do
        </h1>
        {todo.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
