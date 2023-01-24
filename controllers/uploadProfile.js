const cloudinary =  require("cloudinary").v2;
const multer = require("multer");
const path = require("path");
const UserModel = require("../models/userSchema");

const storage = multer.diskStorage({
    // destination: (req, file, cb) => cb(null, path.join(__dirname,"./uploads")), // cb -> callback
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
});

const handleMultipartData = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
}).single("profile");

const uploadProfilePicture = async (req,res) => {
    const user = req.user;
    console.log(req.roles)
    handleMultipartData(req,res, async (err) => {
        if(err) {
            return res.status(400).json({ msg: err.message })
        }
        if(!req.file){
            return res.status(400).json({ msg: "Please select file" })
        }
        const filePath = req.file.path;
        if(!filePath){
            return res.status(400).json({ msg: "No file path defined" })
        }

        const userExists = await UserModel.findOne({ email: user.email });
        if(!userExists) {
            return res.status(409).json({ msg: "No user found" })
        }
        const options = {
            use_filename: true,
            unique_filename: false,
            overwrite: true,
            folder: "profilePictures",
            userId: userExists._id,
            alt: userExists.firstname,
            public_id: userExists._id,
        };
        const result = await cloudinary.uploader.upload(filePath, options);
        if(result.secure_url) {
           try {
            userExists.profile = result.secure_url;
            await userExists.save();
            res.status(201).json({ msg: "Profile picture uploaded" })
           } catch (error) {
            res.status(400).json({ msg: error.message })
           }
        }
    });
}

module.exports = uploadProfilePicture;