import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/Context";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner";

const AdminAllPosts = ({ setid, blogobj, type, togglePopup }) => {
  let category = blogobj.category.split("_").join(" ").toUpperCase();

  const { deletepost, getblogs } = useAuth();
  const [isDeleting, setIsDeleting] = useState(false);

  const { refetch, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: getblogs,
  });

  function handleedit() {
    setid(blogobj.id);
    togglePopup();
  }

  async function handledelete(id, image) {
    let imageUrl = image;
    const filename = imageUrl
      .substring(imageUrl.lastIndexOf("/") + 1)
      .split("?")[0];

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmDelete) {
      setIsDeleting(true);

      try {
        await deletepost(id, filename);
        await refetch(); // Refetch posts after deletion
      } catch (error) {
        console.error("Error deleting post:", error);
      }

      setIsDeleting(false);
    }
  }

  if (isDeleting) return <Spinner />;

  return (
    <div className="w-full items-center  flex justify-between text-[#8C9BA3]">
      <img className="m-2 w-[10%]" src={blogobj.featured_image} alt="" />
      <p>{blogobj.title}</p>
      {type === "showposts" ? (
        <p>{category}</p>
      ) : (
        <div className="flex gap-2">
          <button
            onClick={handleedit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
          >
            Edit
          </button>
          <button
            onClick={() => handledelete(blogobj.id, blogobj.featured_image)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminAllPosts;
