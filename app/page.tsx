import Container from '@/components/container/Container'
import BlogItem from './components/blogItem/BlogItem'
import React from 'react'
import './main.css'
import NavMenu from './components/navMenu/NavMenu'
export default function Home() {
  return (
    <div className='p-4  w-100 h-100'>
      <NavMenu />
      <Container>
        <div className='hero min-h-screen bg-base-200 mb-4'>
          <div className='hero-content text-center'>
            <div className='max-w-md'>
              <h1 className='text-5xl font-bold pb-2'>Hello there</h1>
              <h2 className='text-xl'>My name is Winnie</h2>
              <p className='py-6'>
                Welcome to our blog, where we share stories and life experiences to inspire and create memorable
                moments. Join us on this colorful journey of life and let is explore together!
              </p>
              <button className='btn btn-primary'>Get Started</button>
            </div>
          </div>
        </div>
        <div className='flex justify-around'>
          <BlogItem />
        </div>
      </Container>
    </div>
  )
}
