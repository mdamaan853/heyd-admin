import React from "react";
import { FiLogOut } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import './style.css'
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bg-company sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <NavLink className="NavLink active" exact to={`/`}>
          HeydGreen 
        </NavLink>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
          <NavLink className="NavLink active" exact to={`#`}>
              Sign out <FiLogOut />
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <Sidebar /> */}
    </>
  );
}

export default Navbar;
