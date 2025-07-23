import { prisma } from "@/lib/prisma";
import { Snippet } from "@prisma/client";
import React from "react";

const Home = async() => {
  const snippets: Snippet[] = await prisma.snippet.findMany();

  if (!snippets) {
    return <h1>No Snippets Found! </h1>;
  }
  return (
    <>
      <div>
        {snippets &&
          snippets.map((snippet) => <h1 key={snippet.id}>{snippet.title}</h1>)}
      </div>
    </>
  );
};

export default Home;
