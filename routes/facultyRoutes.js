const { uploadFaculty, editFaculty, getFaculty } = require("../controllers/facultyController");
const router = require("express").Router();
const verification = require("../controllers/verify")


router.post("/upload/faculty", [verification.userVerification], uploadFaculty);
router.put("/edit/faculty/:facultyId", [verification.userVerification], editFaculty);
router.get("/get/faculty", getFaculty)

module.exports = router;