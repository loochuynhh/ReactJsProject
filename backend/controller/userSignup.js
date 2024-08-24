const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');

async function userSignupController(req, res) {
    try {
        if (!req.body) {
            throw new Error("Request body is missing");
        }        
        const {name, email, password} = req.body
        const user = await userModel.findOne({email})
        if(user){
            throw new Error("User already exist")
        }
        if(!name){
            throw new Error("Please provide name")
        }
        if(!email){
            throw new Error("Please provide email")
        }
        if(!password){
            throw new Error("Please provide password")
        }

        var salt = bcrypt.genSaltSync(10);
        var hashPassword = bcrypt.hashSync(password, salt);
        if(!hashPassword){
            throw new Error("Something is wrong")
        }
        const payload = {
            ...req.body,
            role: "GENERAL",
            password : hashPassword
        }
        const userData = new userModel(payload)
        const saveUser = await userData.save()
        res.status(201).json({
            message: "User created successfully",
            error: false,
            success: true,
            data: saveUser
        })
    } catch (error) {
        res.json({
            message: error.message || error,
            error: true,
            success: false,
        })
    }
}

module.exports = userSignupController