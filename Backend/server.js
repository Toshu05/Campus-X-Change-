const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Sity Mart Backend is running!");
});

app.post("/api/test", (req, res) => {
    console.log(req.body);

    res.json({
        message: "Data received successfully!",
        data: req.body
    });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});