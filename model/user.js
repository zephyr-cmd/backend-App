let mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim : true,
        required : true
    },
    email: {
        type: String,
        trim:true,
        required: true
    },
    phone: Number,
    city : String
}, {
    timestamps: true
})


module.exports = mongoose.model('Users', userSchema);
