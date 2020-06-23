import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
/**
 * @author
 * @function Logo
 **/

const Logo = (props) => {
  return (
    <div className="logo">
      <Link to="/">Siriwut Netwichian</Link>
    </div>
  );
};

export default Logo;
