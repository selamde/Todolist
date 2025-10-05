"use client";
import { createTodo } from "@/server/actions/todo";
import React from "react";

const TodoForm = () => {
  return (
    <div className="flex-1">
      <form
        action={async (formData) => {
          await createTodo(formData);
        }}
        className="flex h-screen flex-col items-center justify-center gap-5"
      >
        <label htmlFor="" className="text-5xl font-bold text-blue-500">
          Title
        </label>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Enter the title"
          className="flex- rounded border border-gray-300 px-2 py-1 focus:outline-blue-500"
        />
        <button
          type="submit"
          className="rounded border bg-blue-500 px-4 py-1 text-white hover:border-blue-500 hover:bg-white hover:text-blue-500"
        >
          Add list
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
