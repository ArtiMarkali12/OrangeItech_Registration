// const router = require("express").Router();
// const enquiryController = require("../controllers/enquiry.controller");

// router.post("/", enquiryController.createEnquiry);
// router.get("/", enquiryController.getAllEnquiries);

// module.exports = router;




const router = require("express").Router();
const enquiryController = require("../controllers/enquiry.controller");

router.post("/", enquiryController.createEnquiry);   // public
router.get("/", enquiryController.getAllEnquiries); // admin use

module.exports = router;
