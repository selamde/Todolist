"use server";

import { revalidatePath } from "next/cache";
import { db } from "../db";

export async function createTodo(formData: FormData) {
  const title = formData.get("title") as string;

  if (!title) {
    return { error: "Title is requierd" };
  }

  try {
    await db.todo.create({
      data: {
        title,
      },
    });
    return { success: true, message: "list created sccessfully" };

    revalidatePath("/");
  } catch (error) {
    console.log(error);
  }
}

//update function

export async function updateList(id: string, completed: boolean) {
  if (!id) {
    return { error: "id not found" };
  }

  await db.todo.update({
    where: { id },
    data: {
      completed,
    },
  });
}

//delete

export async function deleteList(id: string) {
  if (!id) {
    return { error: "id not found" };
  }
  await db.todo.delete({
    where: { id },
  });
}
