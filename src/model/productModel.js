const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
    }
}, {
      timestamps: true
});

module.exports = model('Product', productSchema);