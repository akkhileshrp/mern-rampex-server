const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const contactRoutes = require("./routes/contactRoute");
const feedbackRoutes = require("./routes/feedbackRoute");
const feedbackRoutePageThree = require("./routes/feedbackRoutePageThree");
const feedbackRoutePageFour = require("./routes/feedbackRoutePageFour");
const feedbackRoutePageFive = require("./routes/feedbackRoutePageFive");
const app = express();
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Database connection established successfully"))
.catch((err) => console.error(err));

app.use(express.json());
app.use(cors());
app.use("/contact", contactRoutes);
app.use("/feedback", feedbackRoutes);
app.use("/feedback/page3", feedbackRoutePageThree);
app.use("/feedback/page4", feedbackRoutePageFour);
app.use("/feedback/page5", feedbackRoutePageFive);

app.listen(process.env.PORT, (err) => {
    if (!err) console.log("Server is up and running");
    else console.err(err);
});