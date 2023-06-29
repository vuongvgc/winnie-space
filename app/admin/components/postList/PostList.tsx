import prisma from '@/lib/prisma'
import React from 'react'
export default async function PostList() {
  const posts = await prisma.post.findMany()
  return (
    <div>
      <h1>PostList</h1>
      {posts.map((post) => {
        return (
          <p key={post.id}>
            {post.title} - {post.content}
          </p>
        )
      })}
    </div>
  )
}
