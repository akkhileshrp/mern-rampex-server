const mongoose = require('mongoose');

const feedbackSchemaPageFive = mongoose.Schema({
    questionSixteen: { type: String, required: true },
    questionSeventeen: { type: String, required: true },
    questionEighteen: { type: String, required: true },
    questionNineteen: { type: String, required: true },
    questionTwenty: { type: String, required: true },
}, { timestamps: true });

const feedbackSchemaPageFiveModel = mongoose.model("finals", feedbackSchemaPageFive);

module.exports = feedbackSchemaPageFiveModel;