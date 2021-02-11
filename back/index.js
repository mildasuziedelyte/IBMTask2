const express = require ("express");
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

require ('dotenv/config');


const app = express ();
app.listen(3001);

//Middlewares
app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

//sending react build

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,'build', 'index.html'));
})

//import routes
const searchRoutes = require('./routes/searches');
app.use('/searches',searchRoutes);
const clickRoutes = require('./routes/clicks');
app.use('/clicks',clickRoutes);


//connecting to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser:true},
    ()=>console.log("Connected")
    )