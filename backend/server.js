const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const questionsRoute = require("./routes/questions");
const resultRoute = require("./routes/result");

//連結資料庫
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb Connection Successfully!");
  })
  .catch((err) => {
    console.log(err);
  });

//中間件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//跨域設定
const corsOptions = {
  origin: ["http://localhost:8080", "http://localhost:3000","https://mern-quiz-appliction.vercel.app"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

app.use("/api/questions", questionsRoute);
app.use("/api/result", resultRoute);

//伺服器
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
