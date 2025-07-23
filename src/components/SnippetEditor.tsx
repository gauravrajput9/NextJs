"use client";

import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import type { Snippet } from "@prisma/client";
import { saveSnippet } from "@/actions/saveSnippet";

const SnippetEditorForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState(snippet.code);
  const [title, setTitle] = useState(snippet.title);

  const savedSnippet = saveSnippet.bind(null, snippet.id, code, title);

  return (
    <div className="rounded-lg border border-gray-300 shadow-md bg-white p-6 max-w-4xl mx-auto mt-10">
      <form action={savedSnippet} className="space-y-6">
        <h1 className="text-center text-3xl font-bold text-gray-800">
          Edit Your Snippet
        </h1>

        <div>
          <button
          type="submit"
          className="bg-blue-600 mt-3 mb-3 w-full text-white font-semibold px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Save
        </button>
          <label
            htmlFor="title"
            className="block font-semibold text-lg text-gray-700 mb-1"
          >
            Provide a new or existing title:
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter a valid title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
      </form>

      <div className="mt-8">
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Code Editor:
        </label>
        <Editor
          height="60vh"
          defaultLanguage="javascript"
          value={code}
          onChange={(val) => setCode(val || "")}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: "on",
            tabSize: 2,
          }}
        />
      </div>
    </div>
  );
};

export default SnippetEditorForm;
