const port=4000;
const express=require('express');
const app=express;
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const { error } = require('console');

app.use(express.json());
app.use(cors());

// Database Connection with MongoDb 
mongoose.connect("mongodb+srv://shrutigitte:131202@cluster0.slco9.mongodb.net/VogueVibes");

// API creation 
app.length('/',(req,res)=>{
    res.send("Express App is Running")
})

app.listen(port,(error)=>{
if(!error){
    console.log("Server running on Port"+port)
}else{
    console.log("Error:- "+error)
}})

