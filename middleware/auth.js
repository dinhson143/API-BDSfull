const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next)=>{
    const authHeader = req.header('Authoriztion')
    const token = authHeader && authHeader.split(' ')[1]

    if(!token)
    return res.status(401).json({success: false, message:'Access token not found !!!'})

    try {
        const decoded = jwt.verify(token,process.env.ACESS_TOKEN_SECRET)
        req.userId = decoded.userId
        next()
    } catch (error) {
        console.log(error)
        return res.status(403).json({success: false, message:'Invalid token !!!'})
    }
}


module.exports = verifyToken