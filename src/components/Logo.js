import React from "react";
import logo from '../assets/images/letter-j.png'
import '../style/Logo.css'

const Logo = () => {
  return (
    <nav>
      <img src={logo} alt="jobster logo" style={{width:'80px'}} />
      <p>Jobster</p>
    </nav>
  );
};

export default Logo;
