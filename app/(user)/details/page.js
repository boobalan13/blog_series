import BlogDetails from '@/Component/BlogDetails'
import React, { Suspense } from 'react'

const Detail = () => {
  return (
     <Suspense fallback={<div>Loading episode details...</div>}>
      <BlogDetails />
    </Suspense>
  )
}

export default Detail