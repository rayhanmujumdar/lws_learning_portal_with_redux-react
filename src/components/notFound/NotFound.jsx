import React from 'react'
import {Link} from "react-router-dom"

export default function NotFound() {
  return (
    <div className='h-[92vh] flex justify-center items-center flex-col gap-y-3'>
      <h1 className='text-5xl uppercase'>Page Not Found</h1>
      <Link className='text-xl bg-green-600 w-56 py-1 shadow-md rounded-md hover:text-gray-300 text-center hover:bg-green-700' to="/student/course-player">Go to Course</Link>
    </div>
  )
}
