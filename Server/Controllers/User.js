const User = require('../Models/User.js');
const bcrypt = require('bcryptjs')
const Post = require('../Models/Post');
//UPDATE
const update = async(req,res)=>{
    if(req.body.user_id==req.params.id){
        try{
            
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);
            const updateduser = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true});
            res.status(202).json({msg:"Changes made successfully"});
        }catch(error){
            res.status(500).json({msg:error})
        }
        
    }else{
        res.status(403).json({msg:"You can update only your account!"})
    }
    
}

//DELETE
const Delete = async(req,res)=>{
    if(req.body.user_id==req.params.id){
        try {
            // const user = await Post.findById(req.params.id);
            try{
                // await Post.deleteMany({Username:user.username})
                await User.findByIdAndDelete(req.params.id);
                res.status(202).json({msg:"Your account deleted Successfully!"});
            }catch(error){
                console.log(error);
                res.status(500).json({msg:error})
            }
        }catch (error) {
            console.log(error);
            res.status(500).json({msg:error})
        }
        
    }else{
        res.status(403).json({msg:"You can delete only your account!"})
    }
    
}

//GET USER
const getuser = async(req,res)=>{
    try {
        const user  = await User.findById(req.params.id);
        const {password,...others} = user._doc
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({msg:error})
        console.log(error);
    }
}

module.exports = {update,Delete,getuser}