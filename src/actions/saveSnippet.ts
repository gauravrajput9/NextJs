"use server";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const saveSnippet = async (id: number, code: string, title: string) => {
  await prisma.snippet.update({
    where: { id },

    data: {
      code: code,
      title: title,
    },
  });

  redirect(`/snippet/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await prisma.snippet.delete({
    where: { id },
  });
  redirect("/");
};

export const createSnippet = async (
  prevData: { message: string },
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (!title) {
    return {
      message: "Title is required",
    };
  }
  if (!code) {
    return {
      message: "Code is required",
    };
  }

  await prisma.snippet.create({
    data: {
      title,
      code,
    },
  });
  return { message : "Snippet Saved Successfully"}
  // redirect("/");
};
