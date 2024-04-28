import React from "react";
import { Link } from "react-router-dom";

const Posts2 = ({ postobj }) => {
  return (
    <Link
      to={`/category/${postobj.category}/${postobj.id}`}
      className="w-full  md:max-w-[350px]"
    >
      <div className="md:mb-0 mb-10 w-full">
        <div className="w-full">
          <img
            className="w-full rounded-tr-[2.8rem] rounded-bl-[2.8rem] rounded-lg"
            src={postobj.featured_image}
            alt=""
          />
        </div>
        <h2 className=" text-gray-600 font-[700] my-5 text-[1.2rem]">
          {postobj.title}
        </h2>
      </div>
    </Link>
  );
};

export default Posts2;
