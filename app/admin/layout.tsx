import Loading from '@/components/loading/Loading'
import React, { Suspense } from 'react'
import './globals.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export const metadata = {
  title: 'My Space admin',
  description: 'Generated by create next app'
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions)
  if (session?.user) {
    return (
      <div>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </div>
    )
  } else {
    return (
      <div className='flex justify-center items-center'>
        <p>You need to sign in</p>
      </div>
    )
  }
}
