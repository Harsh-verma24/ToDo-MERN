import React from "react";
import { Notebook } from "lucide-react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <NavLink to='/' className="btn btn-ghost text-xl"><Notebook />To do</NavLink>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to='/completedtodos'>Completed todo</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
