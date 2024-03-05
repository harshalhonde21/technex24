import { useState } from "react";
import axios from "axios";

export const TrackCase = () => {
  const [caseNo, setCaseNo] = useState();
  const [pdf, setPdf] = useState();
  const [caseData, setCaseData] = useState();
  // ffffff
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await axios.post(
      `https://technex24.onrender.com/case/getOneCase`,{
        caseNo
      }
    );

    console.log(res);

    if (res.data.success) {
      console.log(res.data.singleCase);
      setCaseData(res.data.singleCase);
      setPdf(res.data.singleCase.file);
    }
  };

  const downloadPDF = (pdf) => {
    const linkSource = pdf;
    const downloadLink = document.createElement("a");
    const fileName = "FIR.pdf";
    downloadLink.href = linkSource;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  const dateTrim = (dateTrim) => {
    const str = dateTrim.slice(0, 10);

    const year = str.split("-")[0];
    const month = str.split("-")[1];
    const day = str.split("-")[2];

    return day + "/" + month + "/" + year;
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
              <p className="gradient-font text-center font-semibold text-4xl">
                Track Case
              </p>
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
                  <button
                    type="submit"
                    className="gradient-bg text-sm px-10 w-1/2 py-2 font-semibold text-white rounded-2xl"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

            <div className="flex py-10 justify-center items-center">
              {/* <button onClick={() => downloadPDF(pdf)}>Download PDF</button> */}

              <div className="mycasedata">
                <table className="table-auto">
                  <tbody>
                    {caseData && (
                      <>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Case No
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.caseNo}
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Case Description
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.caseDescription}
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Case Category
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.caseCategory}
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Court
                          </td>
                          <td className="border px-4 py-2">{caseData.court}</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Court Location
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.courtLocation}
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Filling Date
                          </td>
                          <td className="border px-4 py-2">
                            {dateTrim(caseData.filingDate)}
                          </td>
                        </tr>

                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Public Affairs
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.publicAffairs}
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Children Involved
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.childrenInvolved}
                          </td>
                        </tr>

                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Sole Earning Members
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.soleEarningMembers}
                          </td>
                        </tr>

                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Old Cases By Dates
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.oldCasesByDates}
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Parties
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.parties}
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            Status
                          </td>
                          <td className="border px-4 py-2">
                            {caseData.status}
                          </td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2 font-semibold">
                            FIR file
                          </td>
                          <td className="border px-4 py-2">
                            <button
                              className="gradient-bg text-xs px-4  py-2 font-semibold text-white rounded-2xl"
                              onClick={() => downloadPDF(caseData.file)}
                            >
                              Download PDF
                            </button>
                          </td>
                        </tr>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

/*

"caseNo": "ffffff",
  "caseDescription": "sada",
  "caseCategory": "sdasd",
  "court": "High Court",
  "courtLocation": "asdasd",
  "filingDate": "2024-03-20T00:00:00.000Z",
  "publicAffairs": "No",
  "childrenInvolved": "Yes",
  "soleEarningMembers": "No",
  "oldCasesByDates": "Yes",
  "parties": [
    "asdasd"
  ],
  "status": "completed",
  "file": "data:appl",

  */
