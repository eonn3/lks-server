const { uploadFaculty, editFaculty, getFaculty } = require("../controllers/facultyController");
const router = require("express").Router();
const verification = require("../controllers/verify")


router.post("/upload/faculty", uploadFaculty);
router.put("/edit/faculty/:facultyId", editFaculty);
router.get("/get/faculty", getFaculty)

module.exports = router;