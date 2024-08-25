const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const router = require('./routers/index');
const cookieParser = require('cookie-parser')
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));
app.use("/api", router);

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log(`Server is running on port ${PORT}`);
    });
});
