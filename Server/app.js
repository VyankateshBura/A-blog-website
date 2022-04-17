const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');

const PORT = 5500;
const app = express();
const task = require('./Routes/auth');
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
