const { sendEmail } = require("../controllers/donationController");

const router = require("express").Router();


router.post("/send-email", sendEmail);


module.exports = router;

