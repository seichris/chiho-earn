const jwt = require("jsonwebtoken");

module.exports = function verifyToken(req, res, next) {

  const bearerHeader = req.headers["authorization"];

  if (!bearerHeader) return next({ code: 403, message: "Header Missing" });

  req.token = bearerToken;
  jwt.verify(req.token, "secretKey", (err, data) => {
    if (err) {
      return next({ code: 403, message: err || "Access denied" });
    }
    req.data = data;
    next();
  });
};
