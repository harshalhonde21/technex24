import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

export const Login = () => {
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(userData);

    try{
      
      const res = await axios.post(
        "https://technex24.onrender.com/user/login",
        userData
      );

      if (res.status) {
        console.log(res.data.user.role);
        localStorage.setItem("role", res.data.user.role);
        localStorage.setItem("isLogin", true);        
        toast.success("Login Successful!");
        navigate("/")
      }
    }catch(err){
      toast.error("Login Failed!")
    }
    
  };

  return (
    <>
      <div className="min-h-screen mx-12 pt-20">
        <div className="bg-ImageSC2 min-h-screen mb-12  pt-3 flex justify-end">
          <form
            onSubmit={handleLogin}
            className="flex flex-col w-1/2 px-24 mt-20"
          >
            <p className="gradient-font text-4xl font-semibold pl-4">
              Admin Login
            </p>
            <div className="flex flex-col mt-10 gap-3">
              <div className="border border-black  rounded-3xl">
                <input
                  type="text"
                  placeholder="Username"
                  className="bg-transparent placeholder-gray-800 py-5 px-5 w-full  outline-none"
                  required
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      username: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="border border-black  rounded-3xl">
                <input
                  type="text"
                  placeholder="Password"
                  className="bg-transparent placeholder-gray-800 py-5 px-5 w-full  outline-none"
                  required
                  onChange={(e) => {
                    setUserData({
                      ...userData,
                      password: e.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="flex justify-between items-center mt-4 mx-2 ">
              <button
                type="submit"
                className="gradient-bg text-sm px-10 py-2 font-semibold text-white rounded-2xl"
              >
                Login
              </button>
              <button
                type="reset"
                className="gradient-bg text-sm px-10 py-2 font-semibold text-white rounded-2xl"
              >
                Clear
              </button>
            </div>
            <div className="pl-4 text-sm pt-6 text-gray-800">
              <Link to="/">Not an admin</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
