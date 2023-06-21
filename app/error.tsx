"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="w-50 flex flex-col justify-center ">
      <h1>Something went wrong</h1>
      <p>{error.message}</p>
      <button className="btn" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}
