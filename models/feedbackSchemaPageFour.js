const mongoose = require('mongoose');

const feedbackSchemaPageFour = mongoose.Schema({
    questionEleven: { type: String, required: true },
    questionTweleve: { type: String, required: true },
    questionThirteen: { type: String, required: true },
    questionFouteen: { type: String, required: true },
    questionFifteen: { type: String, required: true },
}, { timestamps: true });

const feedbackSchemaPageFourModel = mongoose.model("feedbackpagesthrees", feedbackSchemaPageFour);

module.exports = feedbackSchemaPageFourModel;