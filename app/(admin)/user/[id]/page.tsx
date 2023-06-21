import prisma from "@/lib/prisma";
import React from "react";
interface UserDetailProps {
  params: {
    id: string;
  };
}
export default async function UserDetail({ params }: UserDetailProps) {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return (
    <div>
      <h1>User Detail</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
    </div>
  );
}
