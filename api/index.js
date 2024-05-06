const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const authRoute = require("../routes/authRoutes")
require("dotenv").config();


const { MONGO_URI, PORT } = process.env;

const app = express();

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

// app.listen(PORT, () => {
//     console.log(`Server is running on port: ${PORT}`);
// });

app.use(cors());

app.options("*", cors());


app.use(cookieParser());
// app.use(bodyParser.json());
app.use(express.json());

app.use("/", authRoute);

module.exports = app;