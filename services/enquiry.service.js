// const Enquiry = require("../models/enquiry.model");

// const createEnquiry = async (data) => {
//   return await Enquiry.create(data);
// };

// const getAllEnquiries = async () => {
//   return await Enquiry.find().populate("eid courseName");
// };

// module.exports = {
//   createEnquiry,
//   getAllEnquiries
// };




const Enquiry = require("../models/enquiry.model");
const mongoose = require("mongoose");

const generateEnquiryNumber = () => "ENQ-" + Date.now();

const createEnquiry = async (data) => {
  try {
    // 🔒 SAFETY MAPPING (MOST IMPORTANT)
    const fname = data.fname || data.firstName || "";
    const lname = data.lname || data.lastName || "";

    if (!fname || !lname) {
      throw new Error("First name and Last name are required");
    }

    const enquiryData = {
      fname,
      mname: data.mname || null,
      lname,

      contact: data.contact,
      email: data.email,
      address: data.address || null,

      qualification: data.qualification,
      requiredCourse: data.requiredCourse,
      requiredLocation: data.requiredLocation || null,

      gender: data.gender || null,
      reference: data.reference || null,
      testScore: data.testScore || null,

      enquiryNumber: generateEnquiryNumber(),

      eid: mongoose.Types.ObjectId.isValid(data.eid) ? data.eid : null,
      courseName: mongoose.Types.ObjectId.isValid(data.courseName)
        ? data.courseName
        : null,
    };

    return await Enquiry.create(enquiryData);
  } catch (error) {
    console.error("❌ Service Create Enquiry Error:", error.message);
    throw error;
  }
};

module.exports = { createEnquiry };
