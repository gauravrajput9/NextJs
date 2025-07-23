export const dynamicParams = true
import SnippetEditorForm from "@/components/SnippetEditor";
import { prisma } from "@/lib/prisma";
import React from "react";

type PageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);

  if (isNaN(id)) {
    return <h1>Invalid snippet ID</h1>;
  }

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) {
    return <h1>Snippet Not Found...</h1>;
  }

  return (
    <div>
      <SnippetEditorForm snippet={snippet} />
    </div>
  );
}
