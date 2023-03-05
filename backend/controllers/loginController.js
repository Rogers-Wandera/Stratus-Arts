const UserModel = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const LoginController = async (req,res) => {
   const { email,password } = req.body;
   if(!email || !password) {
        return res.status(400).json({msg:`email and password are required`})
   }

   const userExists = await UserModel.findOne({ email: email }).exec();
   if(!userExists) {
        return res.status(401).json({msg:`user with email of ${email} doesnot exist`})
   }

   try {
    const match = await bcrypt.compare(password, userExists.password);
    if(match) {
        const roles = Object.values(userExists.roles);
        const accessToken = jwt.sign(
            {
                UserInfo: {
                    displayName: userExists.firstname,
                    email: userExists.email,
                    roles: roles
                }
            },
            process.env.JWT_ACCESS_TOKEN,
            { expiresIn: "2 days" }
        )

        const refreshToken = jwt.sign(
            {
                displayName: userExists.firstname,
                email: userExists.email,
                roles: userExists.roles,
            },
            process.env.JWT_REFRESH_TOKEN,
            { expiresIn: "30d" }
        )

        userExists.refreshToken = refreshToken;
        await userExists.save();
        res.cookie("jwt",refreshToken,{httpOnly: true,sameSite:"None",maxAge: 24 * 60 * 60 * 10000})
        res.status(200).json({msg: `successfully signed in as ${email}`,accessToken})
    } else {
        res.status(401).json({msg: `Passwords donot match`})
    }
   } catch (error) {
        res.status(400).json({msg: error.message })
   }
}

module.exports = LoginController;