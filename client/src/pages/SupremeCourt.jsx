import React, { useState } from "react";
import { Link } from "react-router-dom";

export const SupremeCourt = () => {

    const userRole = "admin"



  return (
    <>
      <div className="min-h-screen mx-12 pt-24">
        <div className="bgSc min-h-[120vh] pt-6">

            <div>
            <p className="gradient-font text-center font-semibold text-4xl">
            Priority Dashboard
          </p>

          <div className="my-12 mx-12">



<div className="relative overflow-x-auto ">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-400  ">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Priority No.
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
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae temporibus deleniti quo magnam, quibusdam animi quis iste maxime, fuga distinctio dolore quam ipsum dolores, id officia molestias illum ratione modi!
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae temporibus deleniti quo magnam, quibusdam animi quis iste maxime, fuga distinctio dolore quam ipsum dolores, id officia molestias illum ratione modi!
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae temporibus deleniti quo magnam, quibusdam animi quis iste maxime, fuga distinctio dolore quam ipsum dolores, id officia molestias illum ratione modi!
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr className="bg-white border-b ">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    Apple MacBook Pro 17"
                </th>
                <td className="px-6 py-4">
                    Silver
                </td>
                <td className="px-6 py-4">
                    Laptop
                </td>
                <td className="px-6 py-4">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae temporibus deleniti quo magnam, quibusdam animi quis iste maxime, fuga distinctio dolore quam ipsum dolores, id officia molestias illum ratione modi!
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
                <td className="px-6 py-4">
                    $2999
                </td>
            </tr>
            
           
        </tbody>
    </table>
</div>


          </div>



         {userRole === "admin" && <div className="flex justify-center items-center">
          <Link to="/supremecourt/updatecase" className="gradient-bg text-sm px-10 py-2 font-semibold text-white rounded-2xl">Update new Case</Link>
          </div>}
                
            </div>


           
        </div>
      </div>
    </>
  );
};
