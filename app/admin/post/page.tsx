import React from 'react'
import AddPost from '../components/addPost/AddPost'
import PostList from '../components/postList/PostList'

export default async function PostManagement() {
  return (
    <div>
      <h1>Post Management</h1>
      <AddPost />
      <PostList />
    </div>
  )
}
