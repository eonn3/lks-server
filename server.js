const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoute = require("./routes/authRoutes");
const aboutRoute = require("./routes/aboutRoutes");
const facultyRoute = require("./routes/facultyRoutes");


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

app.use("/", authRoute);
app.use("/", aboutRoute);
app.use("/", facultyRoute);

module.exports = app;