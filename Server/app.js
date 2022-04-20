const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const PORT = 5500;
const multer = require('multer')
const app = express();
const task = require('./Routes/route');
const connect = require('./db/database')
require('dotenv').config();
//middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
// app.use(express.urlencoded({
//     extended:true
//     }));
app.use(express.json());//Very much useful without this we can't communicate with the server in json




//Uploading a file
;
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"images");
    },
    filename:(req,file,cb)=>{
        cb(null,"hello.jpeg");
    }
})
const upload = multer({storage:storage});
app.post("/api/v1/upload",upload.single("file"),(req,res)=>{
    try {
        res.status(200).json("File has been uploaded!");
    } catch (error) {
        res.status(500).json({msg:error});
    }
})

//Static files
// app.use(express.static('../client'));

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
