import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import ActiveLink from "./ActiveLink";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().then(result => {
      toast.success('Logout success')
    }).catch(error => {
      console.log(error.message);
    })
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 w-[95%] mx-auto flex justify-between items-center px-8 py-4">
      {/* logo */}
      <Link to="/" className="flex items-center space-x-2">
        <BoltIcon className="w-6 h-6 text-blue-600"></BoltIcon>
        <span className="font-bold text-xl tracking-wider">nextPage</span>
      </Link>
      {/* Nav item */}
      <div className="font-bold hidden lg:flex space-x-6 items-center">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          Books
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          About Us
        </NavLink>
        {
          user ? <>
          <span>{user.email}</span>
          <button onClick={handleLogOut}>Logout</button>
          </> : <>
          <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          Login
        </NavLink>
        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          Register
        </NavLink>
          </>
        }
      </div>
      {/* Mobile Navbar */}
      <div className="lg:hidden ">
        <button onClick={() => setIsMenuOpen(true)}>
          <Bars3BottomRightIcon className="h-6 w-6 text-black"></Bars3BottomRightIcon>
        </button>
        {isMenuOpen && (
          <div className="absolute top-0 left-0 w-full  z-10">
            <div className="p-5 border rounded bg-white shadow-sm">
              <div className="flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 uppercase">
                  <BoltIcon className="w-6 h-6 text-blue-600"></BoltIcon>
                  <span className="font-bold text-xl tracking-wider">
                    nextPage
                  </span>
                </Link>
                <button onClick={()=> setIsMenuOpen(false)}>
                    <XMarkIcon className="h-6 w-6 text-black"></XMarkIcon>
                </button>
              </div>
              {/* Navs */}
              <div className=" flex flex-col pt-4 space-y-4 font-bold ps-7">
              <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          Home
        </NavLink>
        <NavLink
          to="/books"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          Books
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-blue-500" : "default")}
        >
          About Us
        </NavLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
