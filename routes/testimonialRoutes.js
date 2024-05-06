const controller = require("../controllers/testimonial.controller");
const verify = require("../middleware/authJwt")

module.exports = function(app) {
    app.post("/uploadTestimonial", controller.addTestimonial);

    app.get("/getApprovedTestimonials/:applicantType", controller.getTestimonialsByApplicantType);

    app.get("/getTestimonialsAdmin/:applicantType/:status", [verify.verifyToken], controller.getTestimonialsByApplicantTypeAdmin);

    app.put("/updateTestimonialStatus/:testimonialId/:status", [verify.verifyToken], controller.updateTestimonialStatus);
};