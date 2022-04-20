const User = require('../Models/User.js');
const bcrypt = require('bcryptjs')
const Cat = require('../Models/Category');

//CREATE
const createCategory = async(req,res)=>{
    try {
        const newCat = await Cat.create({...req.body});
        res.status(201).json({msg:newCat});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

//getall Categories
const getAllCategory = async(req,res)=>{
    try {
        const newCat = await Cat.find();
        res.status(201).json({msg:newCat});
    } catch (error) {
        res.status(500).json({msg:error});
    }
}

module.exports = {createCategory,getAllCategory}