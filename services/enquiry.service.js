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

const generateEnquiryNumber = () => {
  return "ENQ-" + Date.now();
};

const createEnquiry = async (data) => {
  const enquiryData = {
    ...data,
    enquiryNumber: generateEnquiryNumber(),
    eid: data.eid || null, // public form safe
  };

  return await Enquiry.create(enquiryData);
};

const getAllEnquiries = async () => {
  return await Enquiry.find().populate("eid courseName");
};

module.exports = {
  createEnquiry,
  getAllEnquiries,
};
