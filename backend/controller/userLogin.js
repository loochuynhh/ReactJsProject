const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');

async function userLoginController(req, res) {
    try {
        if (!req.body) {
            throw new Error("Request body is missing");
        }        
        const {email, password} = req.body
        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }
        const user = await userModel.findOne({email})
        if(!user){
            throw new Error("Invalid account")
        }
        const checkPassword = bcrypt.compareSync(password, user.password)
        if(!checkPassword){
            throw new Error("Password or email incorrect")
        }
        res.status(200).json({
            message: "Login successfully",
            success: true,
            error: false,
            data: user
        })
    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            error: true
        })
    }
}

module.exports = userLoginController