const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: "Email must be unique" });
      break;
    case "UserNotFound":
      res.status(401).json({ message: "Invalid email/password" });
      break;
    case "JsonWebTokenError":
      res.status(403).json({ message: "You are not authorized" });
      break;
    default:
      res.status(500).json({ message: "Internal server error" });
      break;
  }
};

module.exports = errorHandler;
