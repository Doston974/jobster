import React from "react";
import { useSelector } from "react-redux";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import "../style/BigSidebar.css";

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <div className="hidden lg:block">
      <div
        className={
          isSidebarOpen
            ? "big-bar-container"
            : "big-bar-container show-container-big"
        }
      >
        <header>
          <Logo />
        </header>
        <div className="flex justify-center text-xl capitalize mt-8 text-gray-500">
          <NavLinks />
        </div>
      </div>
    </div>
  );
};

export default BigSidebar;
