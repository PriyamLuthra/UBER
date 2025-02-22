const blacklistTokenModel = require('../Models/blacklistToken.model');
const captainModel = require('../Models/captain.model');
const captainService = require('../Services/captain.service');
const {validationResult} = require('express-validator');

module.exports.registerCaptain = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() });
    }
    const {fullname , email , password , vehicle } = req.body;

    const isCaptainAlready = await captainModel.findOne({email});
    if(isCaptainAlready){
        return res.status(400).json({message: "Captain already exists"});
    }

    const hashedPassword = await captainModel.hashPassword(password);

    const captain  = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    })

    const token = captain.generateAuthToken();
    res.status(201).json({captain , token})
}

module.exports.loginCaptain = async(req, res, next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    const {email , password} = req.body;
    console.log('Received login data:', { email, password });

    
    const captain = await captainModel.findOne({email}).select('+password');

    if(!captain){
        return res.status(401).json({message: "Invalid Email or Password"});
    }

    console.log('Retrieved captain:', captain);

    const isMatch = await captain.comparePassword(password);


    if(!isMatch){
        return res.status(401).json({message: "Invalid Email or Password"});
    }

    const token = captain.generateAuthToken();

    res.cookie('token' , token);
    res.status(200).json({captain , token})
}

module.exports.getCaptainProfile = async(req, res , next)=>{
    res.status(200).json({captain: req.captain})
}

module.exports.logoutCaptain = async(req, res, next)=>{
    res.clearCookie('token');
    const token = req.cookies.token || (req.headers.authorization?.split(' ')[1]);
    console.log('Token to be blacklisted:', token);

        if (!token) {
            return res.status(400).json({ message: "Token is required" });
        }
    
        await  blacklistTokenModel.create({token})
        
    
        res.status(200).json({message: "Logged Out Successfully"})
}
    

