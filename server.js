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

const allowedOrigins = [
  'http://localhost:3000',
  'https://lamp-kiddie-school.vercel.app',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors());


app.use(cookieParser());
app.use(express.json());


app.use("/", authRoute);
app.use("/", aboutRoute);
app.use("/", facultyRoute);
app.use("/", photoRoute);
app.use("/", emailRoute);

// routes
require('./routes/testimonialRoutes')(app);
require('./routes/blogRoutes')(app);


module.exports = app;