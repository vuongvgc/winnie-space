import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import prisma from '@/lib/prisma'
import { getServerSession } from 'next-auth'
import React from 'react'
export default async function PostList() {
  const session = await getServerSession(authOptions)
  const currentUser = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || ''
    }
  })
  const posts = await prisma.post.findMany({
    where: {
      authorId: currentUser?.id || ''
    }
  })
  return (
    <div>
      <h1>PostList</h1>
      {posts.map((post) => {
        return (
          <p key={post.id}>
            {post.title} - {post.content?.toString()}
          </p>
        )
      })}
    </div>
  )
}
