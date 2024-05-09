const controller = require("../controllers/blog.controller");
const verification = require("../controllers/verify")

module.exports = function(app) {
    app.post("/uploadBlog", controller.addBlog);

    app.get("/viewBlogs", controller.getBlogsView);

    app.put("/editBlog/:blogId", controller.editBlog);

    app.delete("/deleteBlog/:blogId", controller.deleteBlog);
}