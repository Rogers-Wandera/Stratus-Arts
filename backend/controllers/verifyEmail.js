const UserModel = require("../models/userSchema");
const EmailToken = require("../models/emailToken")

const verifyEmailController = async (req,res) => {
    try {
        const userExits = await UserModel.findOne({ _id: req.params.id });
        console.log(userExits)
        if(!userExits){
            return res.status(400).json({ msg: "Invalid link or expired" })
        }

        const token = await EmailToken.findOne({ userId: userExits._id,emailToken:req.params.token });
        console.log(token)
        if(!token){
            return res.status(400).json({ msg: "Invalid link or expired" })
        }

        await UserModel.updateOne({ _id: req.params.id },{ verified: true});
        await EmailToken.findByIdAndRemove(token._id);

        res.status(200).json({ msg: "Email has been verified" })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports = verifyEmailController;