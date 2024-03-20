const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    message: { type: String, required: true }
}, { timestamps: true });

const contactModel = mongoose.model("contacts", contactSchema);

module.exports = contactModel;