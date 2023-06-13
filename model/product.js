const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique : true
    },
    quantity: {
        type: Number,
        default: 0
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('Products', productSchema);
