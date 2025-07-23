"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NotFoundSnippet = () => {
  const router = useRouter();

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800 text-center px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl font-semibold mb-6">Snippet Not Found</p>
      <p className="mb-8 text-gray-600">
        The snippet you&#39;re looking for doesn&#39;t exist or may have been deleted.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-200 transition"
        >
          
          Go Back
        </button>
        <Link
          href="/"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Home
        </Link>
      </div>
    </motion.div>
  );
};

export default NotFoundSnippet;
