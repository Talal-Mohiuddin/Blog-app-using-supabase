import React from "react";
import { Link, useParams } from "react-router-dom";

const Posts = ({ postObj }) => {
  const { category } = useParams();
  const title = category.split("_").join(" ").toUpperCase();

  return (
    <Link
      to={`/category/${postObj.category}/${postObj.id}`}
      className="max-w-[380px]"
    >
      <div className="md:mb-0 mb-10">
        <div className="w-ful">
          <img className="w-full rounded-sm" src={postObj.featured_image} alt="" />
        </div>
        <h2 className=" text-[#809EAD] font-[700] my-5 text-[1.5rem]">
          {postObj.title}
        </h2>
        <p className=" text-[1.2rem] ">
          {postObj.content.substring(0, 150)}...
        </p>
        <button className="border-2 border-solid border-black mt-10 font-[500] text-[#809EAD] py-3 px-4 hover:bg-slate-900 duration-100">
          Read More
        </button>
      </div>
    </Link>
  );
};

export default Posts;
