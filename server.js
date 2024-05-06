const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoute = require("./routes/authRoutes");
const aboutRoute = require("./routes/aboutRoutes");
const facultyRoute = require("./routes/facultyRoutes");
const photoRoute  = require("./routes/photoRoutes");
const emailRoute = require("./routes/emailRoutes");


require("dotenv").config();


const { MONGO_URI, PORT } = process.env;

const app = express();

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

app.use(
    cors({
      origin: "http://localhost:3000", // Add URL ng frontend here
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.options("*", cors());


app.use(cookieParser());
app.use(express.json());

// handle email for the donation
app.post


app.use("/", authRoute);
app.use("/", aboutRoute);
app.use("/", facultyRoute);
app.use("/", photoRoute);
app.use("/", emailRoute);

module.exports = app;