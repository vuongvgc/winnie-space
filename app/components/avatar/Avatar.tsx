import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
export default function Avatar() {
  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <Image src={'/images/logo.png'} alt='avatar' width={200} height={200} />
        </div>
      </label>
      <ul tabIndex={0} className='mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
        <li>
          <Link href={'/profile'}>Profile</Link>
        </li>
        <li>
          <button onClick={() => signOut()}>Sign out</button>
        </li>
      </ul>
    </div>
  )
}
