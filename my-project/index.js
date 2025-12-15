const express = require("express");
const app = express();
app.use(express.json());
const restaurantRouter = require("./routes/restaurantRouter");

app.use((req, res, next) => {
    const now = new Date();
    req.requestTimeOfHit = now.toLocaleString;
    next();
});

