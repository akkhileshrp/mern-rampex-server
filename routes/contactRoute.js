const express = require("express");
const ContactSchema = require("../models/contactUserSchema");
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { name, company, email, phoneNumber, message } = req.body;
        const existingUser = await ContactSchema.findOne({ email: email });
        if (existingUser) {
            return res.status(400).send({ message: "User already given feedback" });
        }
        const newUser = new ContactSchema({ name, company, email, phoneNumber, message });
        await newUser.save();
        return res.status(201).send({ message: "Successfully sent!" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = router;