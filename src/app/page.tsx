import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-row gap-2">
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default page;
