const express = require("express");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Banking API Running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const bankingRoutes = require("./routes/bankingRoutes");

// After app.use("/api/auth", authRoutes);
app.use("/api/banking", bankingRoutes);