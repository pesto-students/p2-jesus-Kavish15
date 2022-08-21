const jwt = require("jsonwebtoken");

module.exports=function (req, res, next) {
  const token = req.header("auth-token");
  if (!token) return res.status(401).send("Access Denied No Token Attached");

  try {
    const verified = jwt.verify(token, process.env.TOKEN);
    req.user=verified;
    next();
  } catch (err) {
    req.status(400).send('Invalid token')
  }
}
