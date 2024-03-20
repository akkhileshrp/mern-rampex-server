const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
    questionOne: { type: String, required: true },
    questionTwo: { type: String, required: true },
    questionThree: { type: String, required: true },
    questionFour: { type: String, required: true },
    questionFive: { type: String, required: true },
}, { timestamps: true });

const feedbackModel = mongoose.model('feedbacks', feedbackSchema);

module.exports = feedbackModel;