const express = require('express');
const User = require("./Models/User");
const cors = require('cors');
const path = require('path');
const jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
const crypto = require('crypto')
const PORT = 5500;
const multer = require('multer');
const {GridFsStorage} = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const app = express();
const task = require('./Routes/route');
const connect = require('./db/database');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
//middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.urlencoded({
    extended:true
    }));
app.use(express.json());//Very much useful without this we can't communicate with the server in json


const Mongo_URI = process.env.MONGO_URI;

const conn = mongoose.createConnection(Mongo_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

//Initialize gfs
let gfs,gridFsBucket;

//Uploading a file
conn.once('open',function(){
    gfs = Grid(conn.db,mongoose.mongo);
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db,{bucketName:'uploads'})
    gfs.collection('uploads');
})
// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"images");
//     },
//     filename:(req,file,cb)=>{
//         cb(null,"hello.jpeg");
//     }
// })


const storage = new GridFsStorage({
    url:Mongo_URI,
    file:(req,file)=>{
       return new Promise((resolve,reject)=>{
        crypto.randomBytes(16,(err,buff)=>{
            if(err){
                return reject(err);
            }
            console.log("Uploading the file");
            const data = jwt.verify(req.headers.token,process.env.JWT_SECRET);
            const filename = `${file.fieldname}`+data.id+path.extname(file.originalname);
            const fileInfo = {
                User_id:data.id,
                filename:filename,
                bucketName:'uploads'
            };
            resolve(fileInfo);
        })
       }) 
    }
})
const upload = multer({storage:storage});
app.post("/api/v1/profile/:id",upload.single("profile"),async(req,res)=>{
    try {
        console.log(req.body.user_id);
        const user = await User.findById(req.body.user_id);
        if(!user){
            res.status(404).json({success:false,msg:"User not found"});
        }
        user.name = req.body.name || user.name;
        user.Email = req.body.Email || user.Email;
        user.Username = req.body.Username || user.Username;
        user.password = req.body.password || user.password;
        await user.save();
        res.status(200).json({success:true,msg:"File has been uploaded!",user});
    } catch (error) {
        res.status(500).json({msg:error});
    }
})
app.post("/api/v1/upload/post",upload.array("post"),(req,res)=>{
    try {
        res.status(200).json({msg:"File has been uploaded!"});
    } catch (error) {
        res.status(500).json({msg:error});
    }
})


//Static files
// app.use(express.static('../Client'));

app.use('/api/v1',task);




const start = async()=>{

    try {
        await connect(process.env.MONGO_URI);
        app.listen(PORT,()=>{
            console.log(`The server is listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(`Error:${error}`);
    }
}
start();
