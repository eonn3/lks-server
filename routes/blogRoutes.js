const controller = require("../controllers/blog.controller");
const verification = require("../controllers/verify")

module.exports = function(app) {
    app.post("/uploadBlog", [verification.userVerification], controller.addBlog);

    app.get("/viewBlogs", controller.getBlogsView);

    app.put("/editBlog/:blogId", [verification.userVerification], controller.editBlog);

    app.delete("/deleteBlog/:blogId", [verification.userVerification], controller.deleteBlog);
}