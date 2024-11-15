"use client"

import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { HiHome, HiSquare3Stack3D, HiKey,HiOutlineArrowRightCircle} from "react-icons/hi2";



function SideBar() {
    const Menu=[
        {
            id :1,
            name: 'Home',
            icon: <HiHome />,
            path:'/dashboard'

        },
        {
            id :2,
            name: 'Explore',
            icon: <HiSquare3Stack3D />,
            path:'/dashboard/explore'

        },
        {
            id :3,
            name: 'Upgrade',
            icon: <HiKey />,            
            path:'/dashboard/upgrade'

        },
        {
            id :4,
            name: 'Logout',
            icon: <HiOutlineArrowRightCircle />,
            path:'/dashboard/logout'

        },
    ]
    const path = usePathname();
    return (
    
    <div className=' fixed h-full md: w-64 p-5 shadow-md'>
    <img src={'/logo.png'} width={50} height={25}/>
       <hr className='my-100'/>
       <ul>
            {Menu.map((item, index)=>(
                <li key={item.path || index}>
                <Link href={item.path}>
                <div className={`flex items-center gap-2 text-gray-600 p-3 cursor-pointer hover:bg-gray-100
                 hover:text-black rounded-lg mb-3 ${item.path==path&&'bg-gray-100 text-black'}`}>
                    <div className=' text-2xl p-2 '>{item.icon}</div>
                    <h2> {item.name} </h2>
                </div>                
            </Link>   
            </li>                 
            ))}
       </ul>
             <div className=' absolute bottom-10 w-[80%]'>
                 <Progress value={33} />
                 <h2 className='text-sm my-2' > 3 Out of 5 Course Created </h2>
                 <h2 className=' text-xs text-gray-500 my-5'> Upgrade Your plan for unlimited course generation </h2>

            </div>

    </div>
  )
}

export default SideBar