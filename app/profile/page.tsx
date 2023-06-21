"use client";

import AuthCheck from "@/components/authCheck/AuthCheck";
import AuthProvider from "@/provider/AuthProvider";
import React from "react";

export default function Profile() {
  return (
    <AuthProvider>
      <AuthCheck>Profile</AuthCheck>
    </AuthProvider>
  );
}
