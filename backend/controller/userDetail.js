async function userDetailController(req, res) {
    try {
        
    } catch (error) {
        res.json({
            message: error.message || error,
            success: false,
            error: true,
            data: []
        })
    }
}
module.exports = userDetailController