const { body, validationResult } = require("express-validator");

module.exports.signUp = [
  body("email").isEmail().withMessage("Enter Valid Email Address"),
  // password must be at least 5 chars long
  body("password")
    .isLength({ min: 2 })
    .withMessage("Password Must be atleast 2 Chars Long"),
  body("full_name").isLength({ min: 2 }),
];

module.exports.checkIds = [
  body("employeeId").isEmpty(),
  body("adminId").isEmpty(),
];
