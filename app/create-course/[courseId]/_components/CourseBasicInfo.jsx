import { Button } from '@/components/ui/button';
import React from 'react'
import { HiPuzzle } from "react-icons/hi";
import EditCourseBasicInfo from './EditCourseBasicInfo';


function CourseBasicInfo({course}) {
  return (
    <div className='p-10 border rounded-xl shadow-lg mt-5'>
        <div className='grid grid-cols-5 md:grid-cols-2 gap-5'>
            <div>
                <h2 className='font-semibold text-xl'>{course?.courseOutput?.courseName}<EditCourseBasicInfo/></h2>
                <p className=' text-sm text-gray flex gap-2 mt-5'>{course?.courseOutput?.description}</p>
                <h2 className='font-medium mt-5 flex gap-2 items-center text-primary'><HiPuzzle />{course?.courseOutput?.category}</h2>
                <Button className="w-full mt-4">Start</Button>
            
            </div>
            <div>
              <img src={'/image.png'} width={300} height={300}
              className='w-full rounded-xl h-{250px} object-cover'/>
            </div>
        </div>
        

    </div>
  )
}

export default CourseBasicInfo