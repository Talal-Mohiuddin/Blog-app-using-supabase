import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuth } from "../../context/Context";
import { useParams } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaEdit, FaList, FaPlus } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import { toast } from "react-toastify";

const Adminnav = () => {
  const navigate = useNavigate();
  const { admin_page } = useParams();
  const { getUser, logout } = useAuth();
  const { data: currentUser } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  let userName = currentUser?.email ? "Talal Mohiuddin" : currentUser?.email;

  let pageTile =
    admin_page === "all_posts"
      ? "All Posts"
      : admin_page === "add_posts"
      ? "Add New Post"
      : admin_page === "edit_posts"
      ? "Edit Post"
      : "Dashboard";

  let icon =
    admin_page === "all_posts" ? (
      <FaList />
    ) : admin_page === "add_posts" ? (
      <FaPlus />
    ) : admin_page === "edit_posts" ? (
      <FaEdit />
    ) : (
      <MdDashboard />
    );

  const handlelogout = useMutation({
    onMutate: async () => {
      await logout();
      navigate("/login");
      toast.success("Successfully Logged Out");
    },
  });

  if (handlelogout.isPending) return <Spinner />;

  return (
    <div className="bg-[#22313A] p-6 flex justify-between">
      <div className="flex font-[600] items-center gap-3 text-xl text-[#8C9BA3]">
        {icon}
        {pageTile}
      </div>
      <div className="flex gap-4 ">
        <div className="flex text-[#8C9BA3] items-center gap-3 ">
          <FaUserTie />
          <div>{userName}</div>
        </div>
        <div className="flex items-center gap-3 ">
          <button
            onClick={() => handlelogout.mutate()}
            className="bg-[#1E2B32] px-4 py-2 rounded-md text-[#8C9BA3] hover:bg-[#8C9BA3] hover:text-[#1E2B32] duration-300 transition-all"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminnav;
