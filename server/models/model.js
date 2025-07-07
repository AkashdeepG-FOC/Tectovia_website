const mongoose = require('mongoose')
const schema = mongoose.Schema;


const fb = new schema({
    From: { type: String },
    Email: { type: String },
    Message:{type: String},
})
  

module.exports=mongoose.model("Feedback",fb)