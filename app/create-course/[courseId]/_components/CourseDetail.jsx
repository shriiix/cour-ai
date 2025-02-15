import React from 'react'
import { HiOutlineChartBar } from "react-icons/hi";
import { HiClock, HiMiniBookOpen } from "react-icons/hi2";
function CourseDetail({course}) {
  return (
    <div className='border p-6 rounded-xl shadow-md mt-3'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
                <div className='flex gap-2'>
                <HiOutlineChartBar className='text-4xl text-primary'/>
                <div>
                    <h2 className='text-xs text-gray-500'>Skill Level:  </h2>
                    <h2 className='font-medium text-lg'>{course?.courseOutput?.level}</h2>   
                </div>            
            </div>
            <div className='flex gap-2'>
                <HiClock  className='text-4xl text-primary'/>
                <div>
                    <h2 className='text-xs text-gray-500'> Duration:  </h2>
                    <h2 className='font-medium text-lg'>{course?.courseOutput?.duration}</h2>   
                </div>            
            </div>
            <div className='flex gap-2'>
                <HiMiniBookOpen  className='text-4xl text-primary'/>
                <div>
                    <h2 className='text-xs text-gray-500'>Chapters :  </h2>
                    <h2 className='font-medium text-lg'>{course?.courseOutput?.numberOfChapters}</h2>   
                </div>            
            </div>
        </div>
    </div>
    
  )
}

export default CourseDetail