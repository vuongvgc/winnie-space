import Loading from '@/components/loading/Loading'
import React, { Suspense } from 'react'
import './globals.css'
import NavMenu from '../components/navMenu/NavMenu'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='p-4  w-100 h-100'>
      <NavMenu />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  )
}
