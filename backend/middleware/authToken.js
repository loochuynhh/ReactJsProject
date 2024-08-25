const jwt = require('jsonwebtoken')
async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token 
        if(!token){
            throw new Error('User not Login')
        }
        jwt.verify(token, process.env.JWT_KEY, function(err, decoded) {
            if(err){
                throw new Error("User not Valid")
            }
            req.user.id = decoded?.id
            next()
          });
    } catch (error) {
        res.status(400).json({
            message: error.message || error,
            success: false,
            error: true,
        })
    }
}
module.exports = authToken