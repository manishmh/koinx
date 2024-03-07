'use client'

import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { NavbarItem } from "./navbar";
import { useState } from "react";

const MobileNavbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbar = () => {
    setNavbarOpen((prev) => !prev)
  }

  return (
    <div className="md:hidden">
      <MdMenu className={`text-3xl ${!navbarOpen ? "opacity-100" : "opacity-0"}`} onClick={handleNavbar}/>
      <div className={`absolute bg-black bg-opacity-20 px-6 py-4 right-0 h-screen top-0 transition-transform duration-300 z-50
        ${!navbarOpen && "translate-x-full"} 
      `}>
        <div className="flex justify-end">
          <IoClose className="text-3xl" onClick={handleNavbar}/>
        </div>
        <div className="flex flex-col items-end mt-4 gap-4">
          <NavbarItem link="/" item="crypto taxes" />
          <NavbarItem link="/" item="free tools" />
          <NavbarItem link="/" item="resource center" />
          <button className="capitalize font-semibold text-white bg-[#1B4AEF] px-4 py-2 rounded-md text-sm">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
