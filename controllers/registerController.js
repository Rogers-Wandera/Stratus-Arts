const UserModel = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const sendEmail = require("../middlewares/emailVerification");
const EmailToken = require("../models/emailToken")

const registerController = async (req,res) => {
    const { firstname,lastname,gender,password,confirmpassword,email } = req.body
    if(!firstname || !lastname || !gender || !password || !confirmpassword || !email) {
        return res.status(409).json({ msg: 
            "firstname,lastname,gender,password,confirmPassword,email must be provided" 
        })
    }

    const passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

    if(password.length < 8){
        return res.status(409).json({ msg: 
            "Password must be atleast 8 characters long" 
        })
    }

    if(!password.match(passRegex)){
        return res.status(409).json({ msg: 
            "Minimum eight characters, at least one letter and one number" 
        })
    }
    if(confirmpassword !== password){
        return res.status(409).json({ msg: 
            "Passwords must match" 
        })
    }

    try {
        const duplicate = await UserModel.findOne({ email: email }).exec();

        if(duplicate) {
            return res.status(409).json({msg: `user with email of ${email} already exists`})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            password: hashedPassword,
            email: email,
        };

       const newUser =  await UserModel.create({ ...user });
       const token = await EmailToken.create({
        userId: newUser._id,
        emailToken: require("crypto").randomBytes(64).toString("hex")
       })

       const message = `${process.env.BASE_URL}/verify/${newUser._id}/${token.emailToken}`
       await sendEmail(newUser.email, "Verify Email", message);
        res.status(201).json({msg: `New user with email of ${email} created`})
    } catch (error) {
        return res.status(400).json({ msg: 
            error.message
        })
    }
}

module.exports = registerController;