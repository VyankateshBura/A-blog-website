const User = require('../Models/User.js');
const bcrypt = require('bcryptjs')
const Post = require('../Models/Post');

//CREATE
const createPost = async(req,res)=>{
    try{
        const newpost = await Post.create({...req.body});
        res.status(201).json({msg:"Post created Successfully!"});
        
    }catch(error){
        res.status(500).json({msg:error})
    }    
}

//UPDATE
const updatePost = async(req,res)=>{
    const post = await Post.findById(req.params.id);
    if(post.Username===req.body.Username){
        try{
            const updatedpost = await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(202).json({updatedpost,msg:"Updated post successfully!"});
        }catch(error){
            res.status(500).json({msg:error})
        }
        
    }else{
        res.status(403).json({msg:"You can update only your post!"})
    }
    
}

//DELETE
const DeletePost = async(req,res)=>{
    const post = await Post.findById(req.params.id);
    if(post.Username===req.body.Username){
        try{
            post.delete();
            res.status(202).json({msg:"Deleted post successfully!"});
        }catch(error){
            res.status(500).json({msg:error});
            console.log(error)
        }
    }else{
        res.status(403).json({msg:"You can delete only your post!"})
    }
    
}

//GET POST 
const getPost = async(req,res)=>{
    try {
        const user  = await Post.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error);
    }
}

//GET ALL POSTS
const getAllPost = async(req,res)=>{
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
           posts = await Post.find({Username:username}); 
        } 
        else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]
            }})
        }
        else{
            posts = await Post.find({});
            console.log("The post is called!");
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error);
    }
}

module.exports = {getAllPost,createPost,updatePost,DeletePost,getPost}