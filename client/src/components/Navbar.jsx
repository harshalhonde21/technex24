import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { toast } from 'react-toastify';

export const Navbar = () => {
  const [tog, setTog] = useState(false);
  const [isLogin, setisLogin] = useState(localStorage.getItem("isLogin") === "true");

  const handleLogout = () => {
    localStorage.setItem("isLogin", "false");
    setisLogin(false);
    toast.success("Logout successful!");
    window.location.reload(); // Reload the page
  };
  

  useEffect(() => {
    setisLogin(localStorage.getItem("isLogin") === "true");
  }, []);

  return (
    <>
      <div className="fixed min-w-full z-10 bg-white">
        <div className="md:mx-12 mx-4 md:py-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <img src="/assets/emblem.png" className="md:h-16 h-8" alt="" />

              <div>
                <p className="font-extrabold text-sm md:text-xl">
                  e-Courts Portal
                </p>
                <p className="text-xs font-medium">Government e-Portal</p>
                <p className="text-xs font-medium">Jurisdiction of India</p>
              </div>
            </div>
            <div className="md:flex hidden">
              <img
                src="/assets/lawJusticeLogo.png"
                className="md:h-14 h-7"
                alt=""
              />
            </div>
          </div>

          <div className="flex items-center md:gap-20 gap-0 ">
            <div className="md:flex hidden items-center font-medium gap-2">
              <Link to="/" className="px-4 cool-underline py-2">
                Home
              </Link>
              <Link to="/supremecourt" className="px-4 cool-underline py-2">
                Supreme Court
              </Link>
              <Link to="/districtcourt" className="px-4 cool-underline py-2">
                District Courts
              </Link>
              <Link to="/highcourt" className="px-4 cool-underline py-2">
                High Courts
              </Link>
              <Link to="/trackcase" className="px-4 cool-underline py-2">
                Track Case
              </Link>
              {/* <Link to="/dashboard" className=" px-4 cool-underline py-2 ">
              Dashboard
              </Link> */}
            </div>

            <div className="md:hidden flex">
              <button onClick={() => setTog(!tog)}>
                {tog ? <RxCross1 size={24} /> : <HiBars3 size={24} />}
              </button>
            </div>

            <div className="md:flex hidden">
              {isLogin ? (
                <button
                  onClick={handleLogout}
                  className="bg-gradient-to-b from-orange-300 to-orange-500 px-5 py-2 rounded-xl text-sm"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-gradient-to-b from-orange-300 to-orange-500 px-5 py-2 rounded-xl text-sm"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className={`md:hidden ${tog ? "flex" : "hidden"}`}>
          <div className="flex flex-col gap-3 px-4 pt-5 justify-start pb-3 w-full items-center">
            <Link to="/" className="cool-underline  w-full ">
              Home
            </Link>
            <Link to="/supremecourt" className="cool-underline  w-full ">
              Supreme Court
            </Link>
            <Link to="/districtcourt" className="cool-underline  w-full ">
              District Courts
            </Link>
            <Link to="/highcourt" className="cool-underline  w-full ">
              High Courts
            </Link>
            <Link to="/trackcase" className="cool-underline w-full  ">
              Track Case
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
