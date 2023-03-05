const UserModel = require("../models/userSchema");

const handleLogOut = async (req,res) => {
    const cookies = req.cookies;

    if(!cookies?.jwt){
        return res.status(200).json({msg:`Logout success`})
    }

    const refreshToken = cookies.jwt;
    const UserExists = await UserModel.findOne({ refreshToken: refreshToken })
    if(!UserExists){
        res.clearCookie("jwt",{httpOnly: true,sameSite:'None',secure: true})
        return res.status(200).json({msg:`success logout`})
    }

    UserExists.refreshToken = "";
    await UserExists.save();

    res.clearCookie("jwt",{httpOnly: true,sameSite:'None',secure: true}) // in production secure: true to serve https
    res.status(200).json({ msg: "log out successfull" })
}

module.exports = handleLogOut;