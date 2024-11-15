"use client"
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'
import { HiMiniSquares2X2, HiLightBulb, HiMiniAdjustmentsHorizontal } from "react-icons/hi2";


function CreateCourse() {
  
  const StepperOptions =[
    {
      id:1,
      name: 'Category',
      icon:<HiMiniSquares2X2 />
    },
    {
      id:2,
      name: 'Topic & Desc',
      icon:<HiLightBulb />

    },
    {
      id:3,
      name: 'Options',
      icon:<HiMiniAdjustmentsHorizontal />

    }
  ]
  const [activeIndex ,setActiveIndex ]= useState(0);
  
  return (
     
    <div>
        {/*Stepper*/}
        <div>
            <div className=' flex flex-col justify-center items-center mt-10'>
                <h2 className=' text-4xl text-primary font-bold'> Create Course</h2>
                <div className='flex mt-10'>
                    {StepperOptions.map((item,index)=>(
                      <div className='flex items-center' key={index}>
                        <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                          <div className={`bg-gray-400 p-3 rounded-full text-white ${activeIndex>=index&&'bg-purple-500'}`}>
                             {item.icon}
                          </div>
                          <h2 className='hidden md:block md:text-sm'>{item.name}</h2>
                        </div>
                          {index!=StepperOptions?.length-1&&
                          <div className={`h-1 w-[50px] md:w-[100p$x] rounded-full lg:w-[170px] bg-gray-300
                          ${activeIndex-1>=index && 'bg-purple-500'}
                        `}>
                        </div>}
                      </div>
                    ))}
                </div>
            </div>

        </div>

        {/*Component*/}

        {/*Next previous button*/}
        <div>
          <Button onClick={()=> setActiveIndex(activeIndex+1)} >Next</Button>
        </div>

    </div>
  )
}

export default CreateCourse