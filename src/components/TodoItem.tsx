"use client";
import { Trash2 } from "lucide-react"; // Trash2 is the common "delete" icon
import { deleteList, updateList } from "@/server/actions/todo";
import React from "react";

interface TodoItemsProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem = ({ id, title, completed }: TodoItemsProps) => {
  return (
    <div className="">
      <li className="flex w-full justify-start gap-2 py-2">
        <div className="mr-4 flex w-full justify-between">
          <input
            type="checkbox"
            checked={completed}
            onChange={async (e) => {
              await updateList(id, e.target.checked);
            }}
            className="size-6"
          />
          <span
            className={`${completed ? "line-through" : ""} font-bold uppercase`}
          >
            {title}
          </span>
          <button
            onClick={async () => {
              await deleteList(id);
            }}
            className="rounded-full p-2 text-red-500 hover:bg-red-600 hover:text-white"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </li>
    </div>
  );
};

export default TodoItem;
