



import React from 'react'

export const UpdateNewCase = () => {
  return (
    <>
            <div className='min-h-screen bgSc mx-12 pt-24'>

          
            <p className="gradient-font text-center pt-12 font-semibold text-4xl">
            Update Case
          </p>
          <div className="flex px-24 pt-12 gap-20">
            <div className="w-1/2">
              <p className="text-xl font-semibold">Essential Information</p>
              <div className="flex flex-col gap-5 pt-4">
                <div className="border border-black  rounded-md">
                  <input
                    type="text"
                    placeholder="Case Number"
                    className="bg-transparent placeholder-gray-800 py-3 px-5 w-full  outline-none"
                  />
                </div>
                <div className="border border-black  rounded-md">
                  <input
                    type="text"
                    placeholder="Case Description"
                    className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  />
                </div>
                <div className="border border-black  rounded-md">
                  <input
                    type="text"
                    placeholder="Case Category"
                    className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  />
                </div>
                <div className="border border-black  rounded-md">
                  <input
                    type="text"
                    placeholder="Case Location"
                    className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  />
                </div>
                <div className="border border-black  rounded-md">
                  <input
                    type="text"
                    placeholder="Filling date"
                    className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <p className="text-xl font-semibold">Parties Involved</p>

              <div className="flex flex-col gap-5 pt-4">
                <div className="border border-black  rounded-md">
                  <input
                    type="text"
                    placeholder="Plaintiff(s)"
                    className="bg-transparent placeholder-gray-800 py-3 px-5 w-full  outline-none"
                  />
                </div>
                <div className="border border-black  rounded-md">
                  <input
                    type="text"
                    placeholder="Defendant(s)"
                    className="bg-transparent placeholder-gray-800 py-3 px-5 w-full outline-none"
                  />
                </div>
              </div>

              <p className="text-xl font-semibold pt-6">Documents</p>

              <div className="flex flex-col gap-5 pt-6">
                <div className="border border-black  rounded-md">
                  <input
                    type="text"
                    placeholder="Upload FIR"
                    className="bg-transparent placeholder-gray-800 py-3 px-5 w-full  outline-none"
                  />
                </div>
                <div className="flex gap-4 items-center mt-4 mx-2 ">
                <button className="gradient-bg text-sm px-10 py-2 font-semibold text-white rounded-2xl">Upload Case</button>
                <button className="gradient-bg text-sm px-10 py-2 font-semibold text-white rounded-2xl">Reset Data</button>
            </div>
              </div>
            </div>
          </div>
            </div>
    
    </>
  )
}
