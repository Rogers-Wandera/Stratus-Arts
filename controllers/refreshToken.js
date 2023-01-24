const jwt = require("jsonwebtoken");
const UserModel = require("../models/userSchema");

const handleRefresh = async (req,res) => {
    const cookie = req.cookies;
    if(!cookie?.jwt){
        return res.status(401).json({msg:`no jwt cookie found`})
    }
    const refreshToken = cookie.jwt;
    const UserExists = await UserModel.findOne({ refreshToken: refreshToken })
    if(!UserExists){
        return res.status(401).json({msg:`there is no user found`})
    }

    try {
        jwt.verify(refreshToken,process.env.JWT_REFRESH_TOKEN,(err,decoded) => {
            if(err || UserExists.firstname !== decoded.displayName ||UserExists.email !== decoded.email){
                return res.status(403).json({msg: "no user found"})
            }
            const roles = Object.values(UserExists.roles);
            const accessToken = jwt.sign(
                {
                    UserInfo: {
                        displayName: UserExists.firstname,
                        email: UserExists.email,
                        roles: roles
                    }
                },
                process.env.JWT_ACCESS_TOKEN,
                { expiresIn: "2 days" }
            )
            res.status(200).json({msg: `successfully signed in as ${decoded.email}`,accessToken})
        })
    } catch (error) {
        res.status(400).json({msg: error.message })
    }
}

module.exports = handleRefresh;