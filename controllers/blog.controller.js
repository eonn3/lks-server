const blog = require("../models/Blog");

// Controller function to add blogs
exports.addBlog = async (req, res) => {
    try {
        const { title, text, image } = req.body;

        // Create a new blog instance
        const newBlog = new blog({
            title: title,
            text: text,
            image: image
        });

        // Save the new blog
        await newBlog.save();

        res.status(201).json({ message: "Blog added successfully.", blog: newBlog });
    } catch (error) {
        console.error("Error adding blog:", error);
        res.status(500).json({ message: "An error occurred while adding the blog." });
    }
};

// Controller function to render blogs view
exports.getBlogsView = async (req, res) => {
    try {
        // Fetch all blogs from the database
        const blogs = await blog.find().exec();

        // Render the blogs view passing the blogs data
        res.status(200).json({ blogs: blogs });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "An error occurred while fetching blogs." });
    }
};

// Controller function to edit a blog
exports.editBlog = async (req, res) => {
    try {
        const { blogId } = req.params; // Assuming the ID of the blog is passed as a URL parameter

        // Find the blog by ID
        const editBlog = await blog.findById(blogId);

        // If the blog doesn't exist, return a 404 error
        if (!blog) {
            return res.status(404).json({ message: "Blog not found." });
        }

        // Update the blog fields
        if (req.body.title) {
            editBlog.title = req.body.title;
        }
        if (req.body.text) {
            editBlog.text = req.body.text;
        }
        if (req.body.image) {
            editBlog.image = req.body.image;
        }

        // Save the updated blog
        await editBlog.save();

        // Respond with a success message and the updated blog
        res.status(200).json({ message: "Blog updated successfully.", blog: editBlog });
    } catch (error) {
        console.error("Error editing blog:", error);
        res.status(500).json({ message: "An error occurred while editing the blog." });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const { blogId } = req.params; // Assuming the ID of the blog is passed as a URL parameter

        // Find the blog by ID
        const deletedBlog = await blog.findByIdAndDelete(blogId);

        // If the blog doesn't exist, return a 404 error
        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found." });
        }

        // Respond with a success message and the deleted blog
        res.status(200).json({ message: "Blog deleted successfully.", blog: deletedBlog });
    } catch (error) {
        console.error("Error deleting blog:", error);
        res.status(500).json({ message: "An error occurred while deleting the blog." });
    }
};