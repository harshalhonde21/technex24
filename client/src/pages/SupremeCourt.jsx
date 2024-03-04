import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SupremeCourt = () => {
  const [isLogin, setIsLogin] = useState(localStorage.getItem("isLogin") === "true");
  const userRole = "admin";

  return (
    <>
      <div className="min-h-screen md:mx-12 mx-4 md:pt-24  pt-16">
        <div className="bgSc min-h-[120vh] pt-6 md:pb-0 pb-12">

          <div>
            <p className="gradient-font text-center font-semibold text-3xl md:text-4xl">
              Priority Dashboard
            </p>

            <div className="my-12 mx-12">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Priority
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Case Number
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Description
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Parties
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Filed Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Table body content */}
                  </tbody>
                </table>
              </div>
            </div>

            {isLogin && userRole === "admin" && (
              <div className="flex justify-center items-center">
                <Link to="/supremecourt/updatecase" className="gradient-bg text-sm px-10 py-2 font-semibold text-white rounded-2xl">
                  Update new Case
                </Link>
              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default SupremeCourt;
