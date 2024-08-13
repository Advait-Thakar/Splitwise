const mongoose = require('mongoose')
const express = require('express')
const { mongoURI } = require('../config')


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('MongoDB connected successfully');
}).catch((err)=>{
    console.log('Error connecting to DB: ', err.message);
    process.exit(1);
});



