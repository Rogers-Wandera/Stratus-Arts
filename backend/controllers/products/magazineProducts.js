const cloudinary =  require("cloudinary").v2;
const multer = require("multer");
const path = require("path");
const UserModel = require("../../models/userSchema");
const magazineModel = require("../../models/magazineModel");

// multer
const storage = multer.diskStorage({
    // destination: (req, file, cb) => cb(null, path.join(__dirname,"./uploads")), // cb -> callback
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
});

const handleMultipleFileUpload = multer({
    storage,
    limits: { fileSize: 10000000 * 10 },
}).array("file",2)

const getAllMagazineProducts = async (req,res) => {
    const products = await magazineModel.find({});
    if(products.length < 0){
        return res.status(200).json({ msg: "No products to display" })
    }

    res.status(200).json(products)
}

const addNewMagazineProduct = async (req,res) => {
    const user = req.user;
    handleMultipleFileUpload(req,res, async (err) => {
        const { title,price,category,description,featured,discount,relate1,relate2 } = req.body;
        if(err) {
            return res.status(400).json({ msg: err.message })
        }
        if(!req.files){
            return res.status(400).json({ msg: "Please select file" })
        }
        const filePath = req.files;
        if(!filePath){
            return res.status(400).json({ msg: "No file path defined" })
        }
        const userExists = await UserModel.findOne({ email: user.email });
        if(!userExists) {
            return res.status(409).json({ msg: "No user found" })
        }
        const options = {
            use_filename: true,
            unique_filename: true,
            overwrite: false,
            folder: "Magazines",
            userId: userExists._id,
            alt: userExists.firstname,
        };
        const urls = [];
        for (const file of filePath){
            const result = await cloudinary.uploader.upload(file.path, options);
            if(result.secure_url){
                urls.push(result.secure_url)
            }
        }
        const newartProducts = [relate1,relate2];
        const products = {
            title: title,
            price:price,
            category: category,
            description: description,
            featured: featured,
            discount: discount,
            pdfFile: urls,
            artProducts: [...newartProducts],
            createdBy: userExists._id
        }
        const productCreated = await magazineModel.create({ ...products });
        res.status(201).json({ msg: "New Magazine Product created", productCreated})
    })
}

const getSingleMagazineProduct = async (req,res) => {
    const { productId } = req.params;
    const product = await magazineModel.findOne({ _id: productId });
    if(!product) {
       return res.status(400).json({ msg: `No product with such id of ${productId}` })
    }
    res.status(200).json(product)
}

const updateMagazineProduct = async (req,res) => {
    const user = req.user;
    const userExists = await UserModel.findOne({ email: user.email });
    if(!userExists) {
        return res.status(409).json({ msg: "No user found" })
    }
    const product =await magazineModel.findOne({_id: req.params.productId});
    if(!product){
        return res.status(400).json({ msg: "No product found" })
    } else {
        handleMultipleFileUpload(req,res, async (err) => {
            const { title,price,category,description,featured,discount,relate1,relate2 } = req.body;
            if(err) {
                return res.status(400).json({ msg: err.message })
            }
            if(!req.files){
                return res.status(400).json({ msg: "Please select file" })
            }
            const filePath = req.files;
            if(!filePath){
                return res.status(400).json({ msg: "No file path defined" })
            }
            const options = {
                use_filename: true,
                unique_filename: false,
                overwrite: true,
                folder: "Magazine",
                userId: userExists._id,
                alt: userExists.firstname,
            };
            const newartProducts = [relate1,relate2];
            const urls = [];
            for (const file of filePath){
                const result = await cloudinary.uploader.upload(file.path, options);
                if(result.secure_url){
                    urls.push(result.secure_url)
                }
            }
            product.title = title,
            product.price = price,
            product.category = category,
            product.description = description,
            product.featured = featured,
            product.discount = discount,
            product.pdfFile = urls,
            product.artProducts = [...newartProducts],
            product.createdBy = userExists._id
            await product.save();
            res.status(201).json({ msg: "Magazine Product Updated successful"})
        })
    }
}

const deleteSingleMagazineProduct = async (req,res) => {
    const { productId } = req.params;
    const product = await magazineModel.findOne({ _id: productId });
    if(!product) {
       return res.status(400).json({ msg: `No product with such id of ${productId}` })
    }
    await product.deleteOne({ _id: productId })
    res.status(200).json({ msg: "Product deleted successfully" })
}

const deleteSingleMagazineProductEditor = async (req,res) => {
    const { productId } = req.params;
    const user = req.user;
    const product = await magazineModel.findOne({ _id: productId });

    if(!product) {
       return res.status(400).json({ msg: `No product with such id of ${productId}` })
    }
    const userExists = await UserModel.findOne({ email: user.email });
    if(!userExists) {
       return res.status(400).json({ msg: "User doesnot exist" });
    }

    if(product.createdBy.toString() !== userExists._id.toString()){
        return res.status(400).json({ msg: "You are not authorized to delete the product of another user" })
    } else {
        await product.deleteOne({ createdBy: userExists._id })
        res.status(200).json({ msg: "Product deleted successfully" })
    }
}

const updateMagazineProductEditor = async (req,res) => {
    const user = req.user;
    const userExists = await UserModel.findOne({ email: user.email });
    if(!userExists) {
        return res.status(409).json({ msg: "No user found" })
    }
    const magazineUpdate = await magazineModel.findOne({ _id: req.params.productId });
    if(!magazineUpdate){
     return res.status(400).json({ msg: "Product doesnot exist" })
    }

    if(magazineUpdate.createdBy.toString() !== userExists._id.toString()){
        return res.status(400).json({ msg: "You are not authorized to update the product of another user" })
    } else {
        handleMultipleFileUpload(req,res, async (err) => {
            const { title,price,category,description,featured,discount,relate1,relate2 } = req.body;
            if(err) {
                return res.status(400).json({ msg: err.message })
            }
            if(!req.files){
                return res.status(400).json({ msg: "Please select file" })
            }
            const filePath = req.files;
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
                folder: "Magazine",
                userId: userExists._id,
                alt: userExists.firstname,
            };
            const newartProducts = [relate1,relate2];
            const urls = [];
            for (const file of filePath){
                const result = await cloudinary.uploader.upload(file.path, options);
                if(result.secure_url){
                    urls.push(result.secure_url)
                }
            }

            magazineUpdate.title = title;
            magazineUpdate.price = price,
            magazineUpdate.category = category,
            magazineUpdate.description = description,
            magazineUpdate.featured = featured,
            magazineUpdate.discount = discount,
            magazineUpdate.artProducts = [...newartProducts],
            magazineUpdate.mainImage = urls,
            magazineUpdate.createdBy = userExists._id

           await magazineUpdate.save();
            res.status(201).json({ msg: "Magazine Product Updated successful"})
        })
    }
}


const addMagazineComment = async (req,res) => {
    const user = req.user;
    const { comment } = req.body;
    const { productId }=req.params;
    if(!user) {
        return res.status(400).json({ msg: 'please signin to comment on the product' })
    }
    if(!comment){
        return res.status(400).json({ msg: 'Please provide comment' })
    }
    const userExists = await UserModel.findOne({ email: user.email });
    const productart = await magazineModel.findOne({_id: productId});

    if(!userExists) {
        return res.status(200).json({ msg: "No user found" })
    }

    if(!productart) {
        return res.status(200).json({ msg: "no such product" })
    }

    const newComment = {
        username: user.displayName,
        id: userExists._id,
        profilePic: userExists.profile,
        comment: comment
    }

    await magazineModel.findByIdAndUpdate({_id: productId}, {comments: newComment})
    res.status(200).json({ msg:'comment added' })
}

const addMagazineRating = async (req,res) => {
    const user = req.user;
    const { rating } = req.body;
    const { productId }=req.params;
    if(!user) {
        return res.status(400).json({ msg: 'please signin to rate on the product' })
    }
    if(!rating){
        return res.status(400).json({ msg: 'Please provide Rating' })
    }
    const userExists = await UserModel.findOne({ email: user.email });
    const productart = await magazineModel.findOne({_id: productId});

    if(!userExists) {
        return res.status(200).json({ msg: "No user found" })
    }

    if(!productart) {
        return res.status(200).json({ msg: "no such product" })
    }

    const newRating = {
        username: user.displayName,
        id: userExists._id,
        profilePic: userExists.profile,
        rating: rating
    }

    await magazineModel.findByIdAndUpdate({_id: productId}, {userRatings: newRating})
    res.status(200).json({ msg:'rate added' })
}


const getMagazineComments = async (req,res) => {
    const { productId }=req.params;
    const productart = await magazineModel.findOne({_id: productId});

    if(!productart) {
        return res.status(200).json({ msg: "no such product" })
    }
    const allComments = await productart.comments;
    if(allComments.length < 0) {
        res.status(200).json({ msg: "No comments" })
    } else {
        res.status(200).json({ allComments })
    }
}

const getMagazineRating = async (req,res) => {
    const { productId }=req.params;
    const productart = await magazineModel.findOne({_id: productId});

    if(!productart) {
        return res.status(200).json({ msg: "no such product" })
    }

    const ratings = await productart.userRatings;
    if(ratings.length < 0) {
        res.status(200).json({ msg: "No ratings" })
    } else {
        res.status(200).json({ ratings })
    }
}

module.exports = {
    getAllMagazineProducts,
    addNewMagazineProduct,
    updateMagazineProduct,
    getSingleMagazineProduct,
    deleteSingleMagazineProduct,
    deleteSingleMagazineProductEditor,
    updateMagazineProductEditor,
    addMagazineComment,
    addMagazineRating,
    getMagazineComments,
    getMagazineRating
}