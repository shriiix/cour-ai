import React from 'react'

function CourseBasicInfo({course}) {
  return (
    <div className='p-10 border rounded-xl shadow-m mt-20'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className='font-semibold'>{course?.courseOutput?.courseName}</h2>
                <p>{course?.courseOutput?.description}</p>
            </div>
        </div>

    </div>
  )
}

export default CourseBasicInfo