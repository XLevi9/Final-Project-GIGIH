const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const videoRoutes = require("./routes/videoRoutes");
const commentRoutes = require("./routes/commentRoutes");
const productRoutes = require("./routes/productRoutes");
require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:3001", // Ganti ini sesuai dengan URL aplikasi frontend Anda
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/videos", videoRoutes);
app.use("/comments", commentRoutes);
app.use("/products", productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));
