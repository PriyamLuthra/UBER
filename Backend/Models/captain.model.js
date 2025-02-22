const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minlength: [3, 'First name must be atleast 3 characters']
        },
        lastname:{
            type: String,
            minlength: [3, 'First name must be atleast 3 characters']
        },

    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    socketId: {
        type: String
    },
    vehicle: {
        color: {
            type: String,
            required: true,
            minLength: [3, 'Color must be atleast 3 characters']
        },
        plate: {
            type: String,
            required: true,
            minLength: [3, 'Plate number must be atleast 3 characters']
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be atleast 1']
        },
        vehicleType:{
            type: String,
            required: true,
            enum: ['car', 'auto', 'bike']
        },
        location: {
            lat:{
                type: Number
            },
            long:{
                type: Number
            }
        }
    }

});

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET , {expiresIn: '1d'});
    return token;
}

captainSchema.methods.comparePassword = async  function (password){
    return await bcrypt.compare(password , this.password)
}

captainSchema.statics.hashPassword = async(password)=>{
    return await bcrypt.hash(password , 10);
}

const captainModel = mongoose.model('captain', captainSchema);
module.exports = captainModel;