const express = require('express')

const router = express.Router()
const userSignupController = require("../controller/userSignup")
const userLoginController = require("../controller/userLogin")
router.post("/signup", userSignupController)
router.post("/login", userLoginController)


module.exports = router
