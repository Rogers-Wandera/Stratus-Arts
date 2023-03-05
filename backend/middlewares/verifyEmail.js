const UserModel = require("../models/userSchema");

const verifyEmailAuth = async (req,res,next) => {
    const user = req.user;
    const userExists = await UserModel.findOne({ email: user.email });
    if(!userExists) {
        return res.status(401).json({ msg: "Your not authorized" })
    }

    if(userExists.verified === false)  {
        return res.status(401).json({ msg: "Your not authorized, please verify your email" })
    } else {
        next();
    }
}

module.exports = verifyEmailAuth;