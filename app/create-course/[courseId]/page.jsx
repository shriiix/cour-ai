"use client";

import { db } from "@/configs/db";
import { CourseList } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { and, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";

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
        <div>CourseLayout</div>
    )
}

export default CourseLayout




