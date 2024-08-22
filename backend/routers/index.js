const express = require('express')

const router = express.Router()
const userSignupController = require("../controller/userSignup")

// router.post("/signup", userSignupController)
module.exports = router

router.post('/signup', (req, res) => {
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('URL:', req.url);
    console.log('Method:', req.method);

    // Xử lý request ở đây
});

