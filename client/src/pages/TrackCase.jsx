import { useState } from "react";

export const TrackCase = () => {
  const [caseNo, setCaseNo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(caseNo);


    const downloadPDF = (pdf)=>{
      const linkSource = `data:application/pdf;base64,${pdf}`;
      const downloadLink = document.createElement("a");
      const fileName = "abc.pdf";
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    
    }


  };

  return (
    <>
      <>
        <div className="min-h-screen mx-12 pt-24">
          <div className="bgSc min-h-[120vh] pt-6">
            <form
              onSubmit={handleSubmit}
              className="flex justify-center items-center flex-col w-full"
            >
              <p className="gradient-font text-center font-semibold text-4xl">Track Case</p>
              <div className="flex flex-col gap-5 mt-12 w-1/3">
                <div className="border border-black  rounded-3xl">
                  <input
                    type="text"
                    required
                    placeholder="Enter Case Number"
                    className="bg-transparent placeholder-gray-800 py-5 px-5 w-full  outline-none"
                    onChange={(e) => {
                      setCaseNo(e.target.value);
                    }}
                  />
                </div>
                <div className="flex justify-center">
                  <button className="gradient-bg text-sm px-10 w-1/2 py-2 font-semibold text-white rounded-2xl" type="submit">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    </>
  );
};
