import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    
  return (
    <div className="flex h-85 w-full items-center justify-center bg-black px-5 text-white">
      <div className="text-center">

        <div className="mb-6 text-8xl font-bold text-orange-500">
          404
        </div>

        <h1 className="mb-3 text-4xl font-bold">
          OOPS!! 😕
        </h1>

        <h2 className="mb-8 text-lg text-gray-400">
          Something went wrong. We couldn't find this page.
        </h2>

        <button
          onClick={() => window.location.href = "/"}
          className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Go back Home 🍔
        </button>

      </div>
    </div>
  );
};

export default Error;