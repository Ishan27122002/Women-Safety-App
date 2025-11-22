// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Expect "Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: "Access denied, token missing!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next(); //  proceed to next middleware/route handler
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = authMiddleware; //  export properly
