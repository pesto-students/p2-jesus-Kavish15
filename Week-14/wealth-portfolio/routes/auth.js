const router = require("express").Router();
const User = require("../models/user");
const jwt=require('jsonwebtoken')
const bcrypt = require("bcryptjs");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  //Pre checks of data what is coming
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if user already exists
  const emailExists = await User.findOne({ email: req.body.email });
  if (emailExists) return res.status(400).send("Email Already Exists");

  //Hashing password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //creating new user
  const user = new User({
    uname: req.body.uname,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  //Pre checks of data what is coming
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //checking if user already exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is Wrong");

  //Password is Correct or Not
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Password is Wrong");
   
  //Create and assign token
  const token=jwt.sign({_id:user._id},process.env.TOKEN);
  res.header('auth-token',token).send(token);
//   res.send(`Welcome ${user.uname} You are Successfully Logged In`);
});

module.exports = router;
