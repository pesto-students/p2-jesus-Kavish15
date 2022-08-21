const express = require("express");
const app = express();
const multer = require("multer");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

//DB Connect
mongoose.connect(process.env.URI, () => {
  console.log("Connected to DB");
});

//Import Route and Route Middleware
const authRouter = require("./routes/auth");
const loggedInUserRoute = require("./routes/loggedInUser");
app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Welcome to Wealth Portfolio App
  Method POST /api/user/register Body->Json (uname,email,password)
  Method POST /api/user/login Body->Json(email,password) Copy Token
  Method GET  /api/post Header->Paste Token(auth-token)
  Method POST /api/post/newExpense Body->Json(asset,fixedIncome,extraIncome,Year)
  Method GET  /api/post/:year Pass year in Url
  Method DELETE /api/post/:year  Pass year in Url
  Method PUT /api/post/:id  Pass Id in Url
  Method POST /upload  Body->Form->Files AddFile
  `);
});

//Upload Api
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, res) => {
  res.send("File Uploaded ! Thanks");
});

app.use("/api/user", authRouter);
app.use("/api/post", loggedInUserRoute);

//Middleware

//Listening Port
app.listen(3000, () => console.log("Server is Up and Running"));
