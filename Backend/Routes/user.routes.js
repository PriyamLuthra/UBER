const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../Controller/user.controller");


router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min: 3}).withMessage("First Name must be atleast 3 characters Long"),
    body('password').isLength({min:3}).withMessage("Password must be atleast 3 characters long")
],
   userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:3}).withMessage("Password must be atleast 3 characters long")
],
   userController.loginUser
)

module.exports = router;
