import CategoryList from '@/app/_shared/CategoryList'
import { Icon } from 'lucide-react'
import React from 'react'

function SelectCategory() {
  return (
    <div className='px-10 md:px-20'>
        <h2 className='flex justify-center font-bold font-serif'>
            Select Course Category
        </h2>
    <div className='grid grid-cols-3 gap-10 px-10 md:px-20'>
        {CategoryList.map((item,index)=>(
            <div className='flex-col flex justify-center p-5 border items-center rounded-xl hover:border-primary hover:bg-blue-50 cursor-pointer'>
                <img src={item.icon} width={50} height={50}/>
                <div className='py-3 font-serif'>
                    <h2>{item.name}</h2>
                </div>
            </div>
        ))}
    </div>
    </div>
  )
}

export default SelectCategory