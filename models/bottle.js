const mongoose = require("mongoose")
const bottleSchema = mongoose.Schema({
    brand:{
        type: String,
        minLength: 3,
        maxLength: 50
    },
    
    bottlesModel: String,
    
    Quantity: {
        type:Number,
        min:1,
        max:1000
    }
    })
module.exports = mongoose.model("bottle",
    bottleSchema)