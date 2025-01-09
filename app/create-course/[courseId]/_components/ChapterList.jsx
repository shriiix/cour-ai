import React from 'react'
import { HiCheckCircle, HiOutlineClock } from "react-icons/hi2";

function ChapterList({course}) {
  return (
    <div className='mt-3 mb-10 font-medium text-xl'>
        <h2> Chapter: </h2>
        <div className=' mt-2'>
               {course?.courseOutput?.chapters.map((chapters,index)=>(
                <div className='border p-5 rounded-lg mb-2 flex items-end justify-between '>
                       <div key={index} className='flex gap-5 items-center mt-5' >
                           <h2 className='bg-primary flex-none h-10 w-10 text-white rounded-full text-center p-2' >{index + 1}</h2>
                           <div>
                               <h2 className='font-medium text-lg'> Name: {chapters?.chapterName} </h2>
                               <p className='text-sm text-gray-600'> Desc: {chapters?.about}</p>
                               <p className='flex gap-2 text-primary items-center'><HiOutlineClock />Duration: {chapters?.duration}</p>
                           </div>
                       </div>
                       <HiCheckCircle className='text-4xl text-gray-400 flex-none'/>
                </div>
               ))}             
        </div>
    </div>
  )
}

export default ChapterList