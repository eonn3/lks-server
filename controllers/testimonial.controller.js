const testimonial = require("../models/Testimonial");

exports.addTestimonial = async (req, res) => {
    try {
      const { name, applicantType, email, contactNumber, text } = req.body;
      // const { adminId } = req;
  
      // Create the new testimonial
      const newTestimonial= new testimonial({
        name: name,
        applicantType: applicantType,
        email: email,
        contactNumber: contactNumber,
        text: text
      });
  
      // Save the new testimonial
      await newTestimonial.save();
  
  
      res.status(201).json({ message: "Testimonial added successfully.", testimonial: newTestimonial });
    } catch (error) {
      console.error("Error adding testimonial:", error);
      res.status(500).json({ message: "An error occurred while adding the testimonial." });
    }
  };

// Function to get testimonials by applicant type
exports.getTestimonialsByApplicantType = async (req, res) => {
  try {
      const { applicantType } = req.params;
      const approvedTestimonials = await testimonial
      .find({ applicantType: applicantType, status: "Approved" })
      .select("name text")
      .exec();

      res.status(200).json({ testimonials: approvedTestimonials });
  } catch (error) {
      console.error("Error getting testimonials by applicant type and approved status:", error);
      res.status(500).json({ message: "An error occurred while getting testimonials." });
  }
};

// Function to get testimonials by applicant type
exports.getTestimonialsByApplicantTypeAdmin = async (req, res) => {
  try {
    const { userId } = req;
      const { applicantType, status } = req.params;
      const approvedTestimonials = await testimonial
      .find({ applicantType: applicantType, status: status })
      .exec();

      res.status(200).json({ testimonials: approvedTestimonials,  userId: userId});
  } catch (error) {
      console.error("Error getting testimonials by applicant type and approved status:", error);
      res.status(500).json({ message: "An error occurred while getting testimonials." });
  }
};

// Function to get testimonials by pending status
exports.getTestimonialsByPendingStatus = async (req, res) => {
  try {
      const pendingTestimonials = await testimonial
      .find({ status: "Pending" })
      .select("name text email contactNumber applicantType")
      .exec();

      res.status(200).json({ testimonials: pendingTestimonials });
  } catch (error) {
      console.error("Error getting testimonials by pending status:", error);
      res.status(500).json({ message: "An error occurred while getting testimonials." });
  }
};


exports.updateTestimonialStatus = async (req, res) => {
  try {
      const { testimonialId, status } = req.params;

      // Check if the status provided is valid
      if (!["Approved", "Rejected"].includes(status)) {
          return res.status(400).json({ message: "Invalid status provided." });
      }

      // Find the testimonial by ID and update its status
      const updatedTestimonial = await testimonial.findById(testimonialId);

      updatedTestimonial.status = status;
      await updatedTestimonial.save();

      if (!updatedTestimonial) {
          return res.status(404).json({ message: "Testimonial not found." });
      }

      res.status(200).json({ message: "Testimonial status updated successfully.", testimonial: updatedTestimonial });
  } catch (error) {
      console.error("Error updating testimonial status:", error);
      res.status(500).json({ message: "An error occurred while updating testimonial status." });
  }
};