import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { HiMiniPencilSquare } from 'react-icons/hi2'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
  
function EditCourseBasicInfo() {
  return (
      <Dialog>
          <DialogTrigger className='px-3 h-{0.5}'><HiMiniPencilSquare /></DialogTrigger>
          <DialogContent>
              <DialogHeader>
                  <DialogTitle>Edit course Tittle and Description </DialogTitle>
                  <DialogDescription>
                      <div className='mt-3' >
                        <label>Course Title: </label>
                        <Input/>
                      </div>
                      <div>
                        <label>Description: </label>
                        <Textarea/>
                      </div>
                  </DialogDescription>
              </DialogHeader>
          </DialogContent>
      </Dialog>

  )
}

export default EditCourseBasicInfo