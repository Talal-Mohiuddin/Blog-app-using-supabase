import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../context/Context'
import {Spinner} from '../components/index.js'
import {Posts} from '../components/index.js'


const PostLayout = () => {
  const { getblogs } = useAuth();
    const { category } = useParams();
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getblogs,
  });
  if (isLoading)
    return (
      <div className="grid grid-cols-3 gap-6">
        <Spinner />
      </div>
    );
  const displayBlog = blogs.filter((blog) => blog.category === category)

  if(displayBlog.length === 0) return(
    <h1 className='text-center font-bold'>No blog Post to show</h1>
  )
  
  return (
    <div className='md:grid grid-cols-3 gap-5 m-[5%]'>
      {displayBlog.map((blog)=>(
        <Posts key={blog.id} postObj={blog}/>
      ))}
    </div>
  )
}

export default PostLayout