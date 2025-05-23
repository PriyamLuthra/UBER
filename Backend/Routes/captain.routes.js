const captainController = require('../Controller/captain.controller');
const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const authMiddleware = require("../Middlewares/auth.middleware");


router.post('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min: 3}).withMessage("First Name must be atleast 3 characters Long"),
    body('password').isLength({min:3}).withMessage("Password must be atleast 3 characters long"),
    body('vehicle.color').isLength({min:3}).withMessage("Color must be atleast 3 characters long"),
    body('vehicle.plate').isLength({min:3}).withMessage("Plate number must be atleast 3 characters long"),
    body('vehicle.capacity').isInt({min:1}).withMessage("Capacity must be atleast 1"),
    body('vehicle.vehicleType').isIn(['car', 'auto', 'bike']).withMessage("Invalid Vehicle Type"),
],
    captainController.registerCaptain

)

router.post('/login' , [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:3}).withMessage('Password must be atleast 3 characters Long')
],
 captainController.loginCaptain 
);

router.get('/profile' , authMiddleware.authCaptain ,  captainController.getCaptainProfile)

router.get('/logout' , authMiddleware.authCaptain , captainController.logoutCaptain)

module.exports = router;