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
  origin: "https://client-ui-final-projects.vercel.app", // Ganti ini sesuai dengan URL aplikasi frontend Anda
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

app.use("/", videoRoutes);
app.use("/", commentRoutes);
app.use("/", productRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on ${port}`));

// Menambahkan route untuk menampilkan pesan berhasil terhubung
app.get("/", (req, res) => {
  res.status(200).send("Server is running and connected successfully!");
});
