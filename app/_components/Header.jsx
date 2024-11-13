import { Button } from '@/components/ui/button'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between p-5 shadow-lg'>
       <img src={'/logo.png'}width={50} height={100}></img>
       <Button>Get Started</Button>
    </div>
  )
}

export default Header