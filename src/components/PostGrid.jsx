import React from "react";
import {Posts2, Spinner} from "./index"

const PostGrid = ({ showposts, type, isLoading }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-6">
        <Spinner />
      </div>
    );
  }
  let heading =
    type === "featured"
      ? "Our Featured Content"
      : type === "buying"
      ? "Recent Buying Guides And Reviews"
      : "Latest Blog Posts";

  return (
    <>
      <h1 className="font-bold text-xl my-5 mx-10">{heading}</h1>
      <div className="grid grid-cols-3 gap-5 m-[5%]">
        {showposts.map((post) => (
          <Posts2 postobj={post} key={post.id} />
        ))}
      </div>
      <span className=" w-[95%] mx-auto  block border-double border-spacing-4 border-gray-500 border-y-2 p-[0.5px] "></span>
    </>
  );
};

export default PostGrid;
