import SnippetEditorForm from "@/components/SnippetEditor";
import { prisma } from "@/lib/prisma";
import React from "react";

const SnippetEditor = async ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold text-red-600">Cannot Find Snippet</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12 mt-10 px-8 max-w-5xl mx-auto">
      <SnippetEditorForm snippet={snippet} />
    </div>
  );
};

export default SnippetEditor;
