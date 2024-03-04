import Case from "../Models/Case.js";

export const addCase = async (req, res) => {
  try {
    const {
      caseNo,
      caseDescription,
      caseCategory,
      court,
      courtLocation,
      filingDate,
      publicAffairs,
      childrenInvolved,
      soleEarningMembers,
      oldCasesByDates,
      parties,
      status,
      file,
    } = req.body;

    const newCase = new Case({
      caseNo,
      caseDescription,
      caseCategory,
      court,
      courtLocation,
      filingDate,
      publicAffairs,
      childrenInvolved,
      soleEarningMembers,
      oldCasesByDates,
      parties,
      status,
      file,
    });

    await newCase.save();

    return res.status(201).json({
      status: true,
      message: `${caseNo} is added to ${court}`,
      newCase,
    });
  } catch (error) {

    // console.error("Error adding case:", error);
    console.log(error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getCase = async (req, res) => {
  try {
    const cases = await Case.find();

    if (!cases || cases.length === 0) {
      return res.status(404).json({ message: "No cases found" });
    }

    return res.status(200).json(cases);
  } catch (error) {
    console.error("Error getting all cases:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getOneCase = async (req, res) => {
  try {
   
    const { caseNo } = req.params ;


    const singleCase = await Case.findOne({ caseNo }); 
  

    return res.status(200).json({success:true,singleCase});
  } catch (error) {
   res.staus(500).json({
    success: false,
    message: error.message
   })
  }
};
