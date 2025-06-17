const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
  console.log("Inside verifyToken middleware");
const authHeader = req.headers.authorization;
console.log("Authorization Header:", authHeader);
  if (!authHeader) {
    return res.status(401).json({ message: "Authorization header missing" });
  }

  const parts = authHeader.split(' ');

  if (parts.length !== 2 || parts[0] !== 'Bearer') {
    return res.status(401).json({ message: "Invalid Authorization header format. Format should be: Bearer <token>" });
  }

  const token = parts[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token" });
    }

    req.userId = user.id; // You can use req.user = decoded if you want all payload
    next();
  });
  const decoded = jwt.decode(token);
console.log("Decoded token payload:", decoded);
};



module.exports = verifyToken;
