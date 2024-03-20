const express = require("express");
const router = express.Router();
const FeedbackSchemaPageFive = require("../models/feedbackSchemaPageFive");

router.post('/', async (req, res) => {
    const { questionSixteen, questionSeventeen, questionEighteen, questionNineteen, questionTwenty } = req.body;
    try {
        const newFeedback = new FeedbackSchemaPageFive({ questionSixteen, questionSeventeen, questionEighteen, questionNineteen, questionTwenty });
        await newFeedback.save();
        return res.status(201).send({ message: 'Feedback saved successfully' });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;