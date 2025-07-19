import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function Home() {
  const snippets = await prisma.snippet.findMany();

  if (!snippets) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">No Snippets Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-12">
      {/* Header */}
      <div className="w-full max-w-3xl flex items-center justify-between mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
          🚀 Snippets App
        </h1>
        <Link href={"/snippet/new"}>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-5 py-2 rounded-lg shadow-sm font-medium">
            + New
          </button>
        </Link>
      </div>

      {/* Snippets List */}
      <div className="w-full max-w-3xl space-y-6">
        {snippets.map((snippet) => (
          <div
            key={snippet.id}
            className="bg-white flex justify-between  shadow rounded-lg p-6 border border-gray-200 hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              {snippet.title}
            </h2>
            <div className="flex gap-8 justify-center items-center" >
              <Link href={`/snippet/${snippet.id}/edit`}>
                <button className="bg-gray-800 hover:bg-gray-200 text-bold text-xl py-1 px-3 rounded-lg text-white shadow-sm font-medium hover:text-gray-900" >Edit</button>
              </Link>
              <Link href={`/snippet/${snippet.id}`}>
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white px-4 py-2 rounded-lg shadow-sm font-medium">
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <p className="mt-12 text-gray-500 text-sm">
        ✨ Your personal code snippet library
      </p>
    </div>
  );
}
