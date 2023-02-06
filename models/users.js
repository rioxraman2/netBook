const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    
    },

    password:{
    type:String,
    required:true,
    unique:true,
    }
},{
    timestamps:true
})

const Contact = mongoose.model("Contact",contactSchema)
module.exports = Contact;