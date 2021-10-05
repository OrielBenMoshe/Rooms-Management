const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  console.log(req.headers);

  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify( token, "env.jwt_key")
    next();
  } catch (error) {
    res.status(401).json({
      message: "Auth failed",
    });
  }

};

module.exports = checkAuth;
