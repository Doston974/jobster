import React, { useState } from "react";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../features/user/userSlice";
import { clearStore } from "../features/user/userSlice"; 
import "../style/Navbar.css";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div className="h-[15vh] flex items-center w-full bg-white">
      <button
        type="button"
        className="toggle-btn text-[#24baf4] p-8 text-xl"
        onClick={toggle}
      >
        <FaAlignLeft />
      </button>

      <div>
        <div className="lg:hidden block">
          <h3 className="text-[#24baf4] text-2xl font-bold tracking-wider">
            {" "}
            Jobster
          </h3>
        </div>

        <h3 className="hidden lg:block text-3xl font-semibold pl-[30vh]">
          Dashboard
        </h3>
      </div>
      <div className="btn-container">
        <button
          type="button"
          className="btn bg-[#24baf4] rounded text-white flex justify-between md:mr-14 lg:px-2 p-1"
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUserCircle />
          {user?.name}
          <FaCaretDown />
        </button>
        <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
          <button
            className="dropdown-btn px-4 py-2 mr-16 capitalize bg-blue-200 rounded text-blue-700"
            type="button"
            onClick={() => dispatch(clearStore("Logging out..."))}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
