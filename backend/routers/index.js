const express = require('express')

const router = express.Router()
const userSignupController = require("../controller/userSignup")
const userLoginController = require("../controller/userLogin")
const authToken = require("../middleware/authToken")
const userDetailController = require("../controller/userDetail")
router.post("/signup", userSignupController)
router.post("/login", userLoginController)
router.get("/user-detail", authToken, userDetailController)

module.exports = router
