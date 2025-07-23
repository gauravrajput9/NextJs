export const dynamicParams = true;
import { prisma } from "@/lib/prisma";

import NotFoundSnippet from "./not-found";
import { GoBackButton } from "@/components/GoBackClientSide";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const id = parseInt(resolvedParams.id);

  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  if (!snippet) return <NotFoundSnippet />;

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 border-b pb-2">
        {snippet.title}
      </h1>
      <pre className="bg-gray-900 text-white p-6 rounded-lg overflow-auto text-lg leading-relaxed">
        <code>{snippet.code}</code>
      </pre>
      <GoBackButton/>
    </div>
  );
}
