const tokenService = require("../services/token.service");

module.exports = (req, res, next) => {
  if (req.method === "OPTIONS") {
    return next();
  }

  try {
    if (!req.headers.authorization) {
      return res
        .status(401)
        .json({ message: "Unauthorized: Authorization header is missing" });
    }

    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const data = tokenService.validateAccess(token);
    req.user = data;
    next();
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ message: "Unauthorized" });
  }
};
