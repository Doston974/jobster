import React from 'react'
import { NavLink } from 'react-router-dom';
import links from '../utils/links';

const NavLinks = ({toggleSidebar}) => {
  return (
    <div className="nav-links ">
    {links.map((link) => {
      const { text, path, id, icon } = link;
      return (
        <NavLink
          to={path}
          className={({ isActive }) => {
            return isActive ? "nav-link active flex text-[#24baf4] mb-4 " : "nav-link flex mb-4 ";
          }}
          key={id}
          onClick={toggleSidebar}
        >
          <span className="text-center flex items-center mr-4 text-xl">{icon}</span>
          {text}
        </NavLink>
      );
    })}
  </div>
  )
}

export default NavLinks