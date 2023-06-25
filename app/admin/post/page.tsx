'use client'
import { Button, Modal } from 'antd'
import React from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import AdminContainer from '../components/adminContainer/AdminContainer'

export default function PostManagement() {
  const [modal, contextHolder] = Modal.useModal()
  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Bla bla ...',
      okText: '确认',
      cancelText: '取消'
    })
  }

  return (
    <AdminContainer>
      <h1>Post Management</h1>
      <Button onClick={confirm}>Confirm</Button>
      {contextHolder}
    </AdminContainer>
  )
}
