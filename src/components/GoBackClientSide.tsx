"use client";

import { useRouter } from "next/navigation";

export const GoBackButton = () => {
  const router = useRouter();

  return (
    <button
      className="bg-red-800 text-white text-xl font-bold px-4 py-2 rounded mt-8"
      onClick={() => router.push("/")}
    >
      Go Back...
    </button>
  );
};
