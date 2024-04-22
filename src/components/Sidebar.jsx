import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../context/Context";

const Sidebar = () => {
  const { category, id } = useParams();
  const { getblogs } = useAuth();
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getblogs,
  });
  let posts = blogs?.filter(
    (blog) => blog.category === category && blog.id !== id
  );

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="py-4 bg-[#F7F8F9]">
      <div className="m-5">
        {posts.map((blog) => (
          <Link key={blog.id} to={`/category/${blog.category}/${blog.id}`}>
            <div className="mb-5 max-h[200px] flex gap-2">
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="rounded-xl w-[100px] h-[100px] object-cover"
              />
              <p className="text-[1rem] text-[#6295B1]">{blog.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
