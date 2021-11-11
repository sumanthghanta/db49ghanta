const mongoose = require("mongoose")
const bottleSchema = mongoose.Schema({
    brand: String,
    bottlesModel: String,
    Quantity: Number
})
module.exports = mongoose.model("bottle",
    bottleSchema)