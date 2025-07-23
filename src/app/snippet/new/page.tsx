"use client";

import { createSnippet } from "@/actions/saveSnippet";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";

const CreateSnippet = () => {
  const router = useRouter();

  const [state, formAction] = useActionState(createSnippet, { message: "" });
  console.log(state)

  useEffect(() => {
    if (state.message === "Snippet Saved Successfully") {
      router.push(`/`);
    }
  }, [state, router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Create a New Snippet
        </h1>
        <form action={formAction} className="flex flex-col space-y-4">
          <div>
            <label htmlFor="title" className="block font-medium mb-1">
              Enter the title:
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="e.g. React snippet..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="code" className="block font-medium mb-1">
              Code:
            </label>
            <textarea
              id="code"
              name="code"
              placeholder="Enter the code..."
              rows={8}
              className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippet;
