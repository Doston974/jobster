import React from "react";
import { Outlet } from "react-router-dom";
import BigSidebar from "../../components/BigSidebar";
import Navbar from "../../components/Navbar";
import SmallSidebar from "../../components/SmallSidebar";

const SharedLayout = () => {
  return (
    <div className="dashboard bg-white shadow-lg flex min-h-screen ">
      <SmallSidebar />
      <BigSidebar />

      <div className="w-full min-h-screen">
        <Navbar />
        <div className="bg-slate-100 h-[85vh] overflow-auto border-l border-t border-gray-300 p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SharedLayout;
