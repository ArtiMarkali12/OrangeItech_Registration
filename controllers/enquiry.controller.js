// const Enquiry = require("../models/enquiry.model");

// const createEnquiry = async (req, res, next) => {
//   try {
//     const enquiry = await Enquiry.create(req.body);
//     res.status(201).json({
//       success: true,
//       message: "Enquiry created successfully",
//       data: enquiry
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// const getAllEnquiries = async (req, res, next) => {
//   try {
//     const enquiries = await Enquiry.find().populate("eid courseName");
//     res.status(200).json({
//       success: true,
//       data: enquiries
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// module.exports = {
//   createEnquiry,
//   getAllEnquiries
// };




const enquiryService = require("../services/enquiry.service");

const createEnquiry = async (req, res) => {
  try {
    const enquiry = await enquiryService.createEnquiry(req.body);

    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    console.error("Enquiry Error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to submit enquiry",
      error: error.message,
    });
  }
};

const getAllEnquiries = async (req, res) => {
  try {
    const enquiries = await enquiryService.getAllEnquiries();

    res.status(200).json({
      success: true,
      data: enquiries,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch enquiries",
    });
  }
};

module.exports = {
  createEnquiry,
  getAllEnquiries,
};
