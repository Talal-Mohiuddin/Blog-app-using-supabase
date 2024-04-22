import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { Sidebar, Spinner } from "../components/index";
import { useAuth } from "../context/Context";
import  usehtmlContent  from "../custonhooks/usehtmlconvert";

const SinglePost = () => {
  const { getblogs } = useAuth();
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getblogs,
  });
  const { id } = useParams();

  if (isLoading) return <Spinner />;

  const displaypost = blogs?.find((blog) => blog.id === id) || {};

  const { title, content, published_date, featured_image: image } = displaypost;
  const [htmlContent] = usehtmlContent(content); // 

  return (
    <div className="md:flex mt-[10%] max-w-[80%] mx-auto justify-between">
      <div className="md:w-[70%] pr-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-gray-700 my-4">{published_date}</p>
        <div className="w-full">
          <img className="w-full" src={image} alt="" />
        </div>
        {htmlContent} 
      </div>
      <div className="md:w-[30%]">
        <Sidebar />
      </div>
    </div>
  );
};

export default SinglePost;
