const controller = require("../controllers/blog.controller");
const verify = require("../middleware/authJwt")

module.exports = function(app) {
    app.post("/uploadBlog", [verify.verifyToken], controller.addBlog);

    app.get("/viewBlogs", controller.getBlogsView);

    app.put("/editBlog/:blogId", [verify.verifyToken], controller.editBlog);

    app.delete("/deleteBlog/:blogId", [verify.verifyToken], controller.deleteBlog);
}