const { uploadFaculty, editFaculty, getFaculty, deleteFaculty } = require("../controllers/facultyController");
const router = require("express").Router();
const verification = require("../controllers/verify")


router.post("/upload/faculty", uploadFaculty);
router.put("/edit/faculty/:facultyId", editFaculty);
router.get("/get/faculty", getFaculty)
router.delete("/delete/faculty/:facultyId", deleteFaculty);

module.exports = router;