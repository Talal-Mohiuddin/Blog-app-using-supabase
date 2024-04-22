// Adminlayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import { Adminmenu, Adminnav } from "../../components/index";

const Adminlayout = () => {
  
  return (
    <>
      <div className="flex w-[100vw] h-[120vh] overflow-hidden bg-[#1E2B32]">
      
        <div className="w-[20%] overflow-hidden">
          <Adminmenu />
        </div>
        <div className="w-[80%] overflow-hidden ">
       
         
          <Adminnav />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Adminlayout;
