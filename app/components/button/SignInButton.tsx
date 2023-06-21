'use client'

import Loading from '@/components/loading/Loading'
import { signIn, useSession } from 'next-auth/react'
import Avatar from '../avatar/Avatar'
import React from 'react'
export default function SignInButton() {
  const { status } = useSession()
  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'authenticated') {
    return <Avatar />
  }

  return (
    <button className='btn rounded-full' onClick={() => signIn()}>
      <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
        />
      </svg>
      Sign in
    </button>
  )
}
