"use client";
import React from "react";

export default function Error({ error, reset }) {
  React.useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1 className="mb-2">Something went wrong, please try again</h1>
      <button
        className="py-1 px-2 dark:bg-blue-600 rounded-lg
         dark:text-white bg-blue-500 text-gray-300"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}

