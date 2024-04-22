import React from "react";
import { useParams } from "react-router-dom";
import { Dashboard, All_Posts, Edit_Post, AddnewPossts } from "../index";

const AdminRoute = () => {
  const { admin_page } = useParams();
  switch (admin_page) {
    case "dashboard":
      return <Dashboard />;
    case "all_posts":
      return <All_Posts />;
    case "edit_posts":
      return <Edit_Post />;
    case "add_posts":
      return <AddnewPossts />;
    default:
      return <Dashboard />;
  }
};

export default AdminRoute;
