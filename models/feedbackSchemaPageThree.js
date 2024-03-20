const mongoose = require('mongoose');

const feedbackSchemaPageThree = mongoose.Schema({
    questionSix: { type: String, required: true },
    questionSeven: { type: String, required: true },
    questionEight: { type: String, required: true },
    questionNine: { type: String, required: true },
    questionTen: { type: String, required: true },
}, { timestamps: true });

const feedbackSchemaPageThreeModel = mongoose.model("feedbackpagestwos", feedbackSchemaPageThree);

module.exports = feedbackSchemaPageThreeModel;