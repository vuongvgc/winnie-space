import Loading from '@/components/loading/Loading'
import { Fira_Code } from 'next/font/google'
import React, { Suspense } from 'react'
import NavMenu from './components/navMenu/NavMenu'
import './globals.css'

const inter = Fira_Code({ subsets: ['latin'] })

export const metadata = {
  title: 'My Space',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} p-4  w-100 h-100`}>
        <NavMenu />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  )
}
