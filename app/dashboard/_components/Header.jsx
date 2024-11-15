import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Header() {
  return (
    <div className=' flex justify-between items-center p-5 shadow-md'>
        <img src={'/logo.png'} width={50} height={50}/>
        <UserButton/>
    </div>
  )
}

export default Header