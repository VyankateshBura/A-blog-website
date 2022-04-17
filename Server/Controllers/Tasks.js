const User = require('../Models/User')
// const StatusCodes = require('http-status-codes');
const register = async(req,res)=>{
    try {
        console.log({...req.body});
        res.status(201).json({msg:"Data Received"})
        // const user = await User.create({...req.body});
        // const token = user.createJWT();
        // res.status(201).json({user:{user:user.name},token})
        // console.log(user);
    } catch (error) {
        console.log(`Error:${error}`);
        res.status(500).json({msg:error});
    }
}
const hello = async(req,res)=>{
    try {
        console.log('hello called')
        res.status(200).json({hello:{hello:"Hello and welcome to get"}});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error});
    }
}
// const login = async(req,res)=>{
//     const {Email,password} = req.body;
//     if(Email)
// }
module.exports = {
    register,hello
}