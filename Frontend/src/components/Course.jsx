import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import axios from 'axios'

function Course() {
const [course,setCourse]=useState([])
useEffect(()=>{
  const getCourse=async ()=>{
    try {
    const res= await axios.get("http://localhost:4002/course")
    console.log(res.data)
    setCourse(res.data)
    } catch (error) {
      console.log("Error:",error)
    }
  }
  getCourse();
},[])

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'>
      <div className='pt-28 items-center justify-center text-center'>
        <h1 className='text-3xl  md:text-4xl'>
            Opportunities
            </h1>
      </div>
      <div className=' mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
           course.map((item) => (
            <Cards item={item} key={item.id} />  
        ))
        }
      </div>
      </div>
      </>
  )
}

export default Course
