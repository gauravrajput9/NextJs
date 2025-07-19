import { deleteSnippet } from "@/actions/saveSnippet";
import { GoBackButton } from "@/components/GoBackClientSide";
import { prisma } from "@/lib/prisma";

const SnippetDetailPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  const snippet = await prisma.snippet.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!snippet) {
    return (
      <h1 className="flex justify-center items-center text-3xl font-bold text-gray-800">
        Snippet could not be found
      </h1>
    );
  }

  const handelSnippetDelete = deleteSnippet.bind(null,snippet.id);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">{snippet.title}</h1>
      <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
        {snippet.code}
      </pre>
      <GoBackButton />
      <form action={handelSnippetDelete}>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default SnippetDetailPage;
