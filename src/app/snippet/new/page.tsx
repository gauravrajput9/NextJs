import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import React from "react";

const NewSnippet = () => {
  const createSnippet = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log("New Snippet Page Loaded",snippet);  
    redirect("/")
    
  };
  

  return (
    <>
      <h1 className="text-3xl font-bold flex justify-center items-center mt-10">
        Create a New Snippet
      </h1>
      <form
        action={createSnippet}
        className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-10 sm:px-6 lg:px-8"
      >
        <div className="w-full max-w-3xl bg-white shadow rounded-lg p-5 sm:p-6 border border-gray-200 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter the title for your snippet"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          />
        </div>

        <div className="w-full max-w-3xl bg-white shadow rounded-lg p-5 sm:p-6 border border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Code
          </label>
          <textarea
            rows={10}
            name="code"
            required
            placeholder="Enter your code snippet here"
            className="w-full px-3 py-2 border border-gray-300 rounded-md font-mono text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y"
          />
        </div>

        {/* Submit Button */}
        <div className="w-full max-w-3xl mt-6 px-1 sm:px-0">
          <button
            type="submit"
            className="w-full bg-gray-900 text-white py-2 rounded-md text-sm sm:text-lg font-medium hover:bg-gray-800 transition"
          >
            Submit Snippet
          </button>
        </div>
      </form>
    </>
  );
};

export default NewSnippet;
