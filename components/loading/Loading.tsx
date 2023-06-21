import React from "react";
import Container from "../container/Container";

export default function Loading() {
  return (
    <Container>
      <div className="flex justify-center items-center w-100 h-100">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    </Container>
  );
}
