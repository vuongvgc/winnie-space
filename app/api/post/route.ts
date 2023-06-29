import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
export async function GET() {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const { title, content } = await req.json()
  const post = await prisma.post.create({
    data: {
      title,
      content
    }
  })

  return NextResponse.json(post)
}
