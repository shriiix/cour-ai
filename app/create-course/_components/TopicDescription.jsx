import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TopicDescription() {
  return (
    <div className='mx-20 lg:mx-44'>
        <div>
            <label> Write the topic to generate the cours (eg. Python Course, Yoga , etc):</label>
            <Input placeholder={'Topic'}/>
        </div>
        <div className='mt-5'>
            <label>Describe your course.  (Optional)</label>
            <Textarea placeholder={"About Your Course"}/>
        </div>
        
    </div>
  )
}

export default TopicDescription