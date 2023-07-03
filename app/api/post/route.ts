import prisma from '@/lib/prisma'
import { NextRequest, NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
export async function GET() {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}

export async function POST(req: NextRequest) {
  const { title, content } = await req.json()
  const session = await getServerSession(authOptions)
  const user = await prisma.user.findUnique({
    where: {
      email: session?.user?.email || ''
    }
  })
  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: user?.id || ''
    }
  })

  return NextResponse.json(post)
}
