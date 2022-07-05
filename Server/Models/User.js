const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
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
        // required:[true,"Type your password"]    
    }
},{timestamps:true})
UserSchema.methods.createJWT = function(){
    return jwt.sign(
        {
            userId:this._id,name:this.name
        },process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_LIFETIME
        }
    )
}
UserSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
})
UserSchema.methods.compare = async function(Givenpassword){
    const result = await bcrypt.compare(Givenpassword,this.password);
    return result;
}
module.exports = mongoose.model('User',UserSchema);