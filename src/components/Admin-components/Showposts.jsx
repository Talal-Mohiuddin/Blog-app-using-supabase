import React from "react";
import { useAuth } from "../../context/Context";
import { useQuery } from "@tanstack/react-query";
import { AdminAllPosts, Spinner } from "../../components/index";
import { useState } from "react";

const Showposts = ({ setid, type, seteditform }) => {
  const [page, setPage] = useState(1);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    seteditform(true);
  };

  const { getblogs } = useAuth();
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getblogs,
  });

  const itemsPerPage = 4;

  const indexOfLastBlog = page * itemsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - itemsPerPage;
  const currentBlogs = blogs?.slice(indexOfFirstBlog, indexOfLastBlog);

  function handleNext() {
    if (currentBlogs.length <= itemsPerPage) {
      setPage(page + 1);
    }
  }

  function handlePrevious() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  if (isLoading) return <Spinner />;

  return (
    <div className="w-[90%] ">
      <div className="flex font-bold  justify-between text-[#8C9BA3]">
        <h1 className="">Featured Image</h1>
        <h2>Title</h2>
        {type === "showposts" && <h2>Category</h2>}
        {type === "editposts" && <h2>Actions</h2>}
      </div>
      {currentBlogs?.map((blog) => (
        <AdminAllPosts
          togglePopup={togglePopup}
          type={type}
          blogobj={blog}
          key={blog.id}
          setid={setid}
        />
      ))}
      <div className="flex p-10 justify-between">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="bg-[#8C9BA3] px-4 py-2 rounded-md text-[#1E2B32] hover:bg-[#1E2B32] hover:text-[#8C9BA3] duration-300 transition-all"
        >
          Previous
        </button>
        <button
          disabled={indexOfLastBlog === blogs?.length}
          onClick={handleNext}
          className="bg-[#8C9BA3] px-4 py-2 rounded-md text-[#1E2B32] hover:bg-[#1E2B32] hover:text-[#8C9BA3] duration-300 transition-all"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Showposts;
