"use client"
import { Button } from '@/components/ui/button';
import React, { useContext, useEffect, useState } from 'react'
import { HiMiniSquares2X2, HiLightBulb, HiMiniAdjustmentsHorizontal } from "react-icons/hi2";
import SelectCategory from './_components/SelectCategory';
import TopicDescription from './_components/TopicDescription';
import SelectOption from './_components/SelectOption';
import { UserInputContext } from '../_context/UserInputContext';


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
  const{userCourseInput,setUserCourseInput}=useContext(UserInputContext);


  useEffect(()=>{

    console.log(userCourseInput)
  },[userCourseInput])

  const CheckStatus=()=>{
    if(userCourseInput?.length==0){
      return true;
    }
    else if(activeIndex==0 &&(userCourseInput?.category?.length==0 || userCourseInput?.category==undefined)){
      return true;
    }
    if(activeIndex==1&&(userCourseInput?.topic?.length==0 || userCourseInput?.topic==undefined)){
      return true;
    }
    else if(activeIndex==2 &&(userCourseInput?.level?.length==0 || userCourseInput?.level==undefined)){
      return true;
    }
    else if(activeIndex==2 &&(userCourseInput?.Time?.length==0 || userCourseInput?.Time==undefined)){
      return true;
    }
    else if(activeIndex==2 &&(userCourseInput?.Video?.length==0 || userCourseInput?.Video==undefined)){
      return true;
    }
    else if(activeIndex==2 &&(userCourseInput?.NumberOfChapter?.length==0 || userCourseInput?.NumberOfChapter==undefined)){
      return true;
    }

    return false;
  }

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
        <div></div>

        <div className='px-10 md:px-20 lg:px-44 mt-10' >

        {/*Component*/} 
           {activeIndex==0?<SelectCategory/>:activeIndex==1?<TopicDescription/>:<SelectOption/>}

        {/*Next previous button*/}
        <div className='flex justify-between mt-10'>
          <Button disabled ={activeIndex==0} onClick={()=>setActiveIndex(activeIndex-1)}>Previous </Button>
          {activeIndex<2&&<Button disabled={CheckStatus()}  onClick={()=> setActiveIndex(activeIndex+1)} >Next</Button>}
         {activeIndex==2&&<Button disabled={CheckStatus()} onClick={()=> setActiveIndex(activeIndex+1)} >Generate Couse </Button>}                  
        </div>
        </div>
    </div>
  )
}

export default CreateCourse