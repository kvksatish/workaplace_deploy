const mongoose = require("mongoose")
const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    comapanyname: {
        type: String,
        required: true,
    },
    workemail: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    others: {
        type: String
    }
})
const LeadModel = mongoose.model("lead", LeadSchema)


module.exports = { LeadModel }