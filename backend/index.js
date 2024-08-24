const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/database');
const router = require('./routers/index');

const app = express();

app.use(express.json());

app.use(cors());
app.use("/api", router);

const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log(`Server is running on port ${PORT}`);
    });
});
