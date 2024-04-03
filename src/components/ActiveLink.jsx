import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({to}) => {
  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? "text-blue-500" : 'text-black' 
        }
      >
        {/* other code */}
      </NavLink>
    </div>
  );
};

export default ActiveLink;
