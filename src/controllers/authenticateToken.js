const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authToken = req.headers["authorization"];
  const token = authToken && authToken.split(" ")[1];
  if (!token) return res.status(401).send("Authentication failed");

  jwt.verify(token, process.env.SECRET_KEY_TO_ACCESS, (error, user) => {
    if (error) throw error;
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
