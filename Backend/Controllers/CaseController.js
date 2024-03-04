import Case from "../Models/Case.js";

export const addCase = async (req, res) => {
  try {
    const lastCase = await Case.findOne().sort({ caseNo: -1 });
    const newCaseNo = lastCase ? lastCase.caseNo + 1 : 1;

    const {
      caseDescription,
      caseCategory,
      court,
      courtLocation,
      filingDate,
      publicAffairs,
      childrenInvolved,
      soleEarningMembers,
      holdCasesByDates,
      parties,
      status,
      file,
    } = req.body;

    const newCase = new Case({
      caseNo: newCaseNo,
      caseDescription,
      caseCategory,
      court,
      courtLocation,
      filingDate,
      publicAffairs,
      childrenInvolved,
      soleEarningMembers,
      holdCasesByDates,
      parties,
      status,
      file,
    });

    await newCase.save();

    return res
      .status(201)
      .json({
        status: true,
        message: `${newCaseNo} is added to ${court}`,
        newCase,
      });
  } catch (error) {
    console.error("Error adding case:", error);
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
