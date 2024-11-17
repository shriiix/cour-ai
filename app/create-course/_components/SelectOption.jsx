import React from 'react'

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from '@/components/ui/input'

function SelectOption() {
    return (
        <div className='px-10 md:px-20 lg:px-44 py-10'>
            <div className='grid grid-cols-2 gap-10'>
                <div >
                    <div>
                        <label >Difficulty Level</label>
                    </div >
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Begginer">Begginer</SelectItem>
                            <SelectItem value="Medium">Medium</SelectItem>
                            <SelectItem value="Pro">Pro</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div >
                    <div>
                        <label >Course Duration</label>
                    </div >
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1 Hour">1 Hour</SelectItem>
                            <SelectItem value="3 Hour">3 Hour</SelectItem>
                            <SelectItem value="More than 3 Hour">More than 3 Hour</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className=''>
                    <div>
                        <label >Add Video</label>
                    </div >
                    <Select>
                        <SelectTrigger className="">
                            <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Yes">Yes</SelectItem>
                            <SelectItem value="No">No</SelectItem>
                            
                        </SelectContent>
                    </Select>
                </div>
                <div className=''>
                    <div>
                        <label >Number Chapter</label>
                    </div >
                    <Input type="Number"/>
                </div>
            </div>
        </div>

    )
}

export default SelectOption