const userModel = require('../Models/user.model');
const userService = require("../Services/user.service")
const {validationResult} = require("express-validator");



module.exports.registerUser = async(req, res, next)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    } 

    const {fullname , email , password} = req.body;
    const hashedPassword  = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    })

    const token =  await user.generateAuthToken();
    res.status(201).json({user, token})
}

/**
 * @api {post} /users/login Login a user
 * @apiName LoginUser
 * @apiGroup User
 * 
 * @apiParam {String} email User's email.
 * @apiParam {String} password User's password.
 * 
 * @apiSuccess {Object} user User object.
 * @apiSuccess {String} token Authentication token.
 * 
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError {Object} 401 Invalid email or password.
 */
module.exports.loginUser = async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    const {email , password} = req.body;

    const user = await userModel.findOne({ email }).select('+password');

    if(!user){
        return res.status(401).json({message: "Invalid Email or Password"});
    }

    const isMatch = await user.comparePassword(password);

    if(!isMatch){
        return res.status(401).json({message: "Invalid Email or Password"});
    }

    const token = user.generateAuthToken();

    res.status(200).json({user,token})

}