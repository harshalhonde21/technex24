import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

  const handleNavLines = () => {

  }


  return (
    <>
      <div className=" fixed min-w-full z-10 bg-white">
        <div className="mx-12 py-4 flex justify-between items-center">

        
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <img src="/assets/emblem.png" className="h-16" alt="" />

            <div>
              <p className="font-extrabold text-xl">e-Courts Portal</p>
              <p className="text-xs font-medium">Government e-Portal</p>
              <p className="text-xs font-medium">Jurisdiction of India</p>
            </div>
          </div>
          <div>
            <img src="/assets/lawJusticeLogo.png" className="h-14" alt="" />
          </div>
        </div>

        <div className="flex items-center gap-20 ">
          <div className="flex items-center font-medium  gap-2">
            <Link to="/" className=" px-4 cool-underline py-2 ">Home</Link>
            <Link to="/supremecourt" className=" px-4 cool-underline py-2 ">Supreme Court</Link>
            <Link to="/districtcourt" className=" px-4 cool-underline py-2 ">District Courts</Link>
            <Link to="/highcourt" className=" px-4 cool-underline py-2 ">High Courts</Link>
            <Link to="" className=" px-4 cool-underline py-2 ">Track Case</Link>
          </div>
          <div>
            <Link to="/login" className="bg-gradient-to-b from-orange-300 to-orange-500 px-5 py-2 rounded-xl text-sm">Login</Link>
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};
