'use client'

import { useSession } from 'next-auth/react'
import React, { ReactNode } from 'react'

interface AuthCheckProps {
  children: ReactNode
}
export default function AuthCheck({ children }: AuthCheckProps) {
  const { data: session, status } = useSession()
  console.log('auth', session, status)
  if (status === 'authenticated') {
    return <>{children}</>
  } else {
    return <>Not logged in to see this</>
  }
}
