"use client";

import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import type { Snippet } from "@prisma/client";
import { saveSnippet } from "@/actions/saveSnippet";

const SnippetEditorForm = ({ snippet }: { snippet: Snippet }) => {
  const [code, setCode] = useState("");

  const savedSnippet = saveSnippet.bind(null, snippet.id, code);

  return (
    <div className="rounded-lg border border-gray-300 shadow-md bg-white p-4">
      <form action={savedSnippet}>
        <h1 className="text-center text-3xl font-bold text-gray-800">
          Edit Your Snippet
        </h1>
        <button
          type="submit"
          className="text-xl bg-gray-800 text-white font-bold py-2 px-4 w-auto"
        >
          Save
        </button>
      </form>
      <Editor
        height="60vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(val) => setCode(val || "")}
        theme="vs-dark"
        defaultValue={snippet.code}
        options={{
          fontSize: 14,
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          wordWrap: "on",
          tabSize: 2,
        }}
      />
    </div>
  );
};

export default SnippetEditorForm;
