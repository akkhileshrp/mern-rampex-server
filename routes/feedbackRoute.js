const express = require("express");
const FeedbackSchema = require("../models/feedbackSchema");
const router = express.Router();

router.post('/', async (req, res) => {
    const { questionOne, questionTwo, questionThree, questionFour, questionFive } = req.body;
    try {
        const newFeedback = new FeedbackSchema({ questionOne, questionTwo, questionThree, questionFour, questionFive });
        await newFeedback.save();
        return res.status(201).send({ message: 'Feedback saved successfully' });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;