const express = require('express');
const User = require('../Models/User')
const {compare} = require('bcryptjs');

// const StatusCodes = require('http-status-codes');
const register = async(req,res)=>{
    try {
        const user = await User.create({...req.body});
        const token = user.createJWT();
        res.status(201).json(user)
        console.log(user);
    } catch (error) {
        console.log(`Error:${error}`);
        res.status(500).json({msg:error});
    }
}
const login = async(req,res)=>{
    try {
        console.log(req.body);
        const {Email,password} = req.body;
        if(!Email||!password){
            res.status(500).json({msg:"Please provide a valid email and password"});
        }
        const user = await User.findOne({Email});
        if(!user){
            res.status(500).json({msg:"Invalid Credentials"});
        }
        const validuser = await user.compare(password);
        if(!validuser){
            res.status(500).json({msg:"Invalid password"});
        }
        const token = await user.createJWT();
        res.status(200).json({user:{user:user.name},token});
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
    register,login
}