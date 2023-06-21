import ModalUser from "@/app/components/modal/ModalUser";
import prisma from "@/lib/prisma";
import Link from "next/link";
import React from "react";

export default async function User() {
  const users = await prisma.user.findMany();
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>User Management</h1>
      </div>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <Link href={`/user/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
