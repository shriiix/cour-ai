import { UserInputContext } from '@/app/_context/UserInputContext';
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React, { useContext } from 'react'

function TopicDescription() {
  const{userCourseInput,setUserCourseInput}=useContext(UserInputContext);
  const handleInputChange=(fileName,value )=>{
    setUserCourseInput(prev=>({
      ...prev,
      [fileName]:value
    }))

  }
  return (
    <div className='mx-20 lg:mx-44'>
        <div>
            <label> Write the topic to generate the cours (eg. Python Course, Yoga , etc):</label>
            <Input placeholder={'Topic'} 
            className="h-14 text-xl" 
            defaultValue={userCourseInput?.topic}
            onChange={(e)=> handleInputChange('topic',e.target.value)}
            />
        </div>
        <div className='mt-5'>
            <label>Describe your course.  (Optional)</label>
            <Textarea placeholder={"About Your Course"} 
              className="h-24 text-xl"
              defaultValue={userCourseInput?.description}
              onChange={(e)=> handleInputChange('description',e.target.value)}
            />
        </div>
        
    </div>
  )
}

export default TopicDescription