const jwt = require("jsonwebtoken");

const verifyJWT = (req,res,next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if(!authHeader?.startsWith("Bearer ")){
        return res.status(401).json({ msg: "Your not authorized" })
    }

    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_ACCESS_TOKEN,(err,decoded) => {
        if(err){
            return res.status(403).json({ msg: "invalid token" })
        }
        req.user = { displayName: decoded.UserInfo.displayName, email: decoded.UserInfo.email };
        req.roles = decoded.UserInfo.roles;
        next();
    })
}

module.exports = verifyJWT;