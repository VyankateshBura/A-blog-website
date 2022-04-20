const mongoose = require('mongoose');
const PostSchema = mongoose.Schema({
    title:{
        type:String,
        required:[true,"Please give the title!"],
        unique:true
    },
    description:{
        type:String,
        required:[true,"Please write something in the description"],
    },
    photo:{
        type:String,
        required:false
    },
    Username:{
        type:String,
        required:[true,"Please provide the username"]
    },
    categories:{
        type:Array,
        required:false
    }

},{timestamps:true})

module.exports = mongoose.model('Post',PostSchema);