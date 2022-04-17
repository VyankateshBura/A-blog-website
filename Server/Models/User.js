const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'Please provide name'],
        maxlength: 50,
        minlength: 3,
    }
    ,
    Email:{
        type: String,
        required: [true, 'Please provide email'],
        match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
        ],
        unique: true,
      
    },
    Username:{
        type:String,
        required:[true,"Type your username"],
       
    },
    password:{
        type:String,
        // required:[true,"Type your password"],
        
    }
})
UserSchema.methods.createJWT = function(){
    return jwt.sign(
        {
            userId:this._id,name:this.name
        },process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_LIFETIME
        }
    )
}
module.exports = mongoose.model('User',UserSchema);