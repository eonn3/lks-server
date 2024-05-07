const controller = require("../controllers/testimonial.controller");
const verification = require("../controllers/verify")

module.exports = function(app) {
    app.post("/uploadTestimonial", controller.addTestimonial);

    app.get("/getApprovedTestimonials/:applicantType", controller.getTestimonialsByApplicantType);

    app.get("/getTestimonialsAdmin/:applicantType/:status", controller.getTestimonialsByApplicantTypeAdmin);

    app.put("/updateTestimonialStatus/:testimonialId/:status", controller.updateTestimonialStatus);
};