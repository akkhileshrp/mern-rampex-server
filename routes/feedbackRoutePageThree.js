const express = require("express");
const router = express.Router();
const FeedbackSchemaPageThree = require("../models/feedbackSchemaPageThree");

router.post('/', async (req, res) => {
    const { questionSix, questionSeven, questionEight, questionNine, questionTen } = req.body;
    try {
        const newFeedback = new FeedbackSchemaPageThree({ questionSix, questionSeven, questionEight, questionNine, questionTen });
        await newFeedback.save();
        return res.status(201).send({ message: 'Feedback saved successfully' });
    } catch (error) {
        return res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;