const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use("/api/students", studentRoutes);
app.get("/", (req, res) => {
    res.send("University Backend API is Running 🚀");
});

mongoose.connect(process.env.MONGO_DB)
    .then(() => {
        console.log("Connected to MONGODB");
    })

    .catch((err) => {
        console.log("Error connecting", err);
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});