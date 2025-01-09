"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";

function CourseLayout({ params }) {
  const { user } = useUser(); // Fetch user data
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const fetchCourse = async () => {
      if (params && user) {
        const { courseId } = await params; // Unwrap `params` here (if it's a promise)
        const result = await db
          .select()
          .from(CourseList)
          .where(
            and(
              eq(CourseList.courseId, courseId),
              eq(CourseList?.createdBy, user?.primaryEmailAddress?.emailAddress)
            )
          );
        setCourse(result[0]); // Save course data
        console.log(result);
      }
    };

    fetchCourse(); // Call the fetch function
  }, [params, user]); // Dependency array: re-run when `params` or `user` changes

  // Render the course or a loading state
      return (
        <div className="mt-10 px-7 md:px-20 lg:px-44">
          <h2 className="font-bold text-center text-2xl"> Course Layout </h2>
          <CourseBasicInfo course={course}/>
          <CourseDetail course={course} />
          <ChapterList course={course}/>

        </div>
    )
}

export default CourseLayout




