import React from "react";
import { useState } from "react";
import axios from "axios"
import {toast} from 'react-toastify'

export const UpdateNewCase = () => {
  const [partiesNum, setPartiesNum] = useState(1);

  const [caseData, setCaseData] = useState({
    parties:["sad"],
  }) ;

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post("https://technex24.onrender.com/case/addCase", caseData);
      
      if (res.status === 201) {
        toast.success(res.data.message);
      } else {
        toast.error("Failed to add case");
      }
    } catch (error) {
      console.error("Error adding case:", error);
      toast.error("Failed to add case");
    }
  };
  


 

 

  return (
    <>
      <div className="min-h-screen bgSc mx-12 pt-24">
        <p className="gradient-font text-center pt-12 font-semibold text-4xl">
          Update Case
        </p>
        <form onSubmit={handleSubmit} className="flex px-24 pt-12 pb-12 gap-20">
          <div className="w-1/2">
            <p className="text-xl font-semibold">Essential Information</p>
            <div className="flex flex-col gap-5 pt-4">
              <div className="border border-black  rounded-md">
                <input required
                  type="text"
                  placeholder="Case Number"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      caseNo: e.target.value
                    })
                  }}
                  className="bg-transparent placeholder-gray-800 py-2 px-5 w-full  outline-none"
                />
              </div>
              <div className="border border-black  rounded-md">
                <input required
                  type="text"
                  placeholder="Case Description"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      caseDescription: e.target.value
                    })
                  }}
                  className="bg-transparent placeholder-gray-800 py-2 px-5 w-full outline-none"
                />
              </div>
              <div className="border border-black  rounded-md">
                <input required
                  type="text"
                  placeholder="Case Category"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      caseCategory: e.target.value
                    })
                  }}
                  className="bg-transparent placeholder-gray-800 py-2 px-5 w-full outline-none"
                />
              </div>
              <div className="border border-black  rounded-md">
                <input required
                  type="text"
                  placeholder="Court Location"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      courtLocation: e.target.value
                    })
                  }}
                  className="bg-transparent placeholder-gray-800 py-2 px-5 w-full outline-none"
                />
              </div>
              
              <div className="border border-black flex items-center  rounded-md">
                
                <div className="pl-5">Filling date</div>
                
                <input required
                id="fillingdate"
                  type="date"
                  placeholder="Filling date"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      filingDate: e.target.value
                    })
                  }}
                  className="bg-transparent placeholder-gray-800 py-2 px-5  outline-none"
                />

              </div>


              <div className="border border-black rounded-md">
                <select required
                  className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      court: e.target.value
                    })
                  }}
                  defaultValue="Court"
                >
                  <option value="Court">Court</option>
                  <option value="High Court">High Court</option>
                  <option value="Supreme Court">Supreme Court</option>
                  <option value="District Cour">District Cour</option>
                </select >
              </div>
              <div className="border border-black  rounded-md">
                <select required
                  className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      publicAffairs: e.target.value
                    })
                  }}
                  defaultValue="Public Affairs"
                >
                  <option value="Public Affairs">Public Affairs</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select >
              </div>
              <div className="border border-black  rounded-md">
                <select required
                  className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      childrenInvolved: e.target.value
                    })
                  }}
                  defaultValue="Children Involved"
                >
                  <option value="Children Involved">Children Involved</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select >
              </div>
              <div className="border border-black  rounded-md">
                <select required
                  className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      soleEarningMembers: e.target.value
                    })
                  }}
                  defaultValue="Sole Earning Members"
                >
                  <option value="Sole Earning Members">
                    Sole Earning Members
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select >
              </div>
              <div className="border border-black  rounded-md">
                <select required
                  className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      holdCasesByDates: e.target.value
                    })
                  }}
                  defaultValue="Hold Cases By Dates"
                >
                  <option value="Hold Cases By Dates">
                    Hold Cases By Dates
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select >
              </div>
              <div className="border border-black  rounded-md">
                <select required
                  className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  defaultValue="Status"
                  onChange={(e)=>{
                    setCaseData({
                      ...caseData,
                      status: e.target.value
                    })
                  }}
                >
                  <option value="Status">Status</option>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                </select >
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex items-center gap-3">
              <p className="text-xl font-semibold">Parties Involved</p>

              <button
                onClick={(e) => {
                  e.preventDefault()                   
                  setPartiesNum((prev) => prev + 1)}}
                className="text-2xl text-green-500"
              >
                +
              </button>
              {partiesNum > 1 && (
                <button
                  onClick={(e) => {
                    e.preventDefault() 
                    setPartiesNum((prev) => prev - 1)}}
                  className="text-2xl text-red-500"
                >
                  -
                </button>
              )}
            </div>

            <div className="flex flex-col gap-5 pt-4">
              {Array.from({ length: partiesNum }).map((_, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="border border-black rounded-md">
                    <input required
                      type="text"
                      placeholder={`Party ${index + 1}`}

                      onChange={(e) => {
                        const updatedParties = [...caseData.parties]; // Make a copy of the parties array
                        updatedParties[index] = e.target.value; // Update the corresponding index with the new value
                        setCaseData({
                          ...caseData,
                          parties: updatedParties // Update the parties array in the state
                        });
                      }}

                      className="bg-transparent placeholder-gray-800 py-2 px-5 w-full outline-none"
                      
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xl font-semibold pt-6">FIR Document</p>

            <div className="flex flex-col gap-5 pt-6">
              <div className="border border-black  rounded-md">
                <input required
                  type="file"
                  placeholder="Upload FIR"
                  accept=".pdf"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    const reader = new FileReader();
                
                    reader.onload = (event) => {
                      setCaseData({
                        ...caseData,
                        file: event.target.result 
                      });
                    };
                
                    reader.readAsDataURL(file);
                  }}
                  className="bg-transparent placeholder-gray-800 py-2 px-5 w-full outline-none"
                />
              </div>
              <div className="flex gap-4 items-center mt-4 mx-2 ">
                <button type="submit" className="gradient-bg text-sm px-10 py-2 font-semibold text-white rounded-2xl">
                  Upload Case
                </button>
                <button type="reset" className="gradient-bg text-sm px-10 py-2 font-semibold text-white rounded-2xl">
                  Reset Data
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

/*



{
  "caseDescription": "Case description goes here",
  "caseCategory": "Category of the case",
  "court": "Court name",  //drop down High Court, Supreme Court, District Cour
  "courtLocation": "Location of the court",
  "filingDate": "2024-03-04T00:00:00.000Z",
  "publicAffairs": "Yes",  //drop down only yes an no
  "childrenInvolved": "No",  //drop down only yes an no
  "soleEarningMembers": "Yes",  //drop down only yes an no
  "holdCasesByDates": "No",   //drop down only yes an no
  "parties": ["Party 1", "Party 2"],
  "status":"pending", //drop down pending, completed
  "file": "File name"
}


*/
