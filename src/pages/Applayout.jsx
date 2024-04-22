import React from "react";
import { Outlet } from "react-router-dom";
import {Header,Footer} from "../components/index"; 

const Applayout = () => {
  return (
    <div>
      <Header />
      <div className="mt-[100px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Applayout;
