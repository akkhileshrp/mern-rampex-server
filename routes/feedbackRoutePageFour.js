const express = require("express");
const router = express.Router();
const FeedbackSchemaPageFour = require("../models/feedbackSchemaPageFour");

router.post('/', async (req, res) => {
    const { questionEleven, questionTweleve, questionThirteen, questionFouteen, questionFifteen } = req.body;
    try {
        const newFeedback = new FeedbackSchemaPageFour({ questionEleven, questionTweleve, questionThirteen, questionFouteen, questionFifteen });
        await newFeedback.save();
        return res.status(201).send({ message: 'Feedback saved successfully' });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;