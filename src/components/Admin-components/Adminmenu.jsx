import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaEdit, FaList, FaPlus } from "react-icons/fa";
import logo from "../../Assets/logo.webp";

const Adminmenu = () => {
  return (
    <>
      <nav className="flex flex-col bg-[#22313A]  h-[100%]  py-4  text-[1.2rem] overflow-hidden gap-1 text-[#8C9BA3]">
        <Link to="/" className="w-[120px] py-5 mx-auto">
          <img src={logo} alt="" className="w-full" />
        </Link>
        <Link
          to="/admin"
          className="flex items-center gap-2 py-4 pl-3 rounded-l-md hover:bg-[#1E2B32] hover:text-white duration-300 transition-all"
        >
          <MdDashboard />
          <>Dashboard</>
        </Link>

        <Link
          to="/admin/all_posts"
          className="flex items-center gap-2  py-4 pl-3 rounded-l-md hover:bg-[#1E2B32] hover:text-white duration-300 transition-all"
        >
          <FaList />
          <>All Posts</>
        </Link>

        <Link
          to="/admin/edit_posts"
          className="flex items-center gap-2  py-4 pl-3 rounded-l-md hover:bg-[#1E2B32] hover:text-white duration-300 transition-all"
        >
          <FaEdit />
          <>Edit Posts</>
        </Link>

        <Link
          to="/admin/add_posts"
          className="flex items-center gap-2  py-4 pl-3 rounded-l-md hover:bg-[#1E2B32] hover:text-white duration-300 transition-all"
        >
          <FaPlus />
          <>Add Posts</>
        </Link>
      </nav>
    </>
  );
};

export default Adminmenu;
