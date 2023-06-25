'use client'

import AuthCheck from '@/components/authCheck/AuthCheck'
import AuthProvider from '@/provider/AuthProvider'
import { ConfigProvider } from 'antd'
import React from 'react'
interface AdminContainerProps {
  children: React.ReactNode
}
export default function AdminContainer({ children }: AdminContainerProps) {
  return (
    <AuthProvider>
      <AuthCheck>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#ED4192'
            }
          }}
        >
          {children}
        </ConfigProvider>
      </AuthCheck>
    </AuthProvider>
  )
}
