import React from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSideBar } from "../features/user/userSlice";
import NavLinks from "./NavLinks";
import "../style/SmallSidebar.css";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSideBar());
  };
  return (
    <div className="lg:hidden">
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="m-5 text-2xl text-red-700" onClick={toggle}>
            <FaTimes />
          </button>
          <header className="flex justify-center mb-12">
            <Logo />
          </header>
          <div className="ml-12">
            <NavLinks toggleSidebar={toggle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallSidebar;
