'use client'
import { Button, Form, Input, Modal, message } from 'antd'
import React, { useState } from 'react'
interface PostForm {
  title: string
  content: string
}

export default function AddPost() {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const onFinish = async (data: PostForm) => {
    setConfirmLoading(true)
    await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        message.success('Create Post successfully')
        setConfirmLoading(false)
        setOpen(false)
      })
      .catch((error: Error) => {
        message.success(`Error: ${error.message}`)
        setConfirmLoading(false)
      })
  }
  const showModal = () => {
    setOpen(true)
  }

  const handleCancel = () => {
    setOpen(false)
  }
  const [form] = Form.useForm()

  return (
    <>
      <Button type='primary' onClick={showModal}>
        Add Post
      </Button>
      <Modal title='Add Post' open={open} onOk={form.submit} confirmLoading={confirmLoading} onCancel={handleCancel}>
        <Form
          name='post-form'
          form={form}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item label='Title' name='title' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item label='Content' name='content' rules={[{ required: true, message: 'Please input your content!' }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}
