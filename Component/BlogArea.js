"use client"
import React from 'react'
import BlogBox from './BlogBox'
import data from "@/public/dataSet.json"
import { useRouter } from 'next/navigation'

const BlogArea = () => {
    const router=useRouter();
  return (
    <div className='blog_area'>
        {data.map((item,index)=>{
            return(
                <BlogBox key={index} episode_id={item.episode_id} episode_name={item.episode_name} episode_image={item.episode_image} description={item.description} duration={item.duration} release_date={item.release_date} router={router}/>
        )})}
         
    </div>
  )
}

export default BlogArea