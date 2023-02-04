const cloudinary =  require("cloudinary").v2;
const multer = require("multer");
const path = require("path");
const UserModel = require("../../models/userSchema");
const pictureArtModel = require("../../models/pictureArt");

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

const handleMultipleImageUpload = multer({
    storage,
    limits: { fileSize: 1000000 * 5 },
}).array("image",3)


const getAllProducts = async (req,res) => {
    const products = await pictureArtModel.find({});
    if(products.length < 0){
        return res.status(200).json({ msg: "No products to display" })
    }

    res.status(200).json(products)
}

const addNewArtProduct = async (req,res) => {
    const user = req.user;
    handleMultipleImageUpload(req,res, async (err) => {
        const { title,price,category,description,featured,discount,magazine } = req.body;
        if(err) {
            return res.status(400).json({ msg: err.message })
        }
        console.log(req.body)
        // if(!title || !price || !category || !description){
        //     return res.status(400).json({ msg: `Please fill in the required fileds` })
        // }
        console.log(req.files)
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
            folder: "pictureArts",
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
        const products = {
            title: title,
            price:price,
            category: category,
            description: description,
            featured: featured,
            discount: discount,
            magazine: magazine,
            mainImage: urls,
            createdBy: userExists._id
        }
        const productCreated = await pictureArtModel.create({ ...products });
        res.status(201).json({ msg: "New Art Product created", productCreated})
    })
}

const getSingleArtProduct = async (req,res) => {
    const { productId } = req.params;
    const product = await pictureArtModel.findOne({ _id: productId });
    if(!product) {
       return res.status(400).json({ msg: `No product with such id of ${productId}` })
    }
    res.status(200).json(product)
}

const updateProduct = async (req,res) => {
    const user = req.user;
    handleMultipleImageUpload(req,res, async (err) => {
        const { title,price,category,description,featured,discount,magazine } = req.body;
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
            folder: "pictureArts",
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
        const product = {
            title: title,
            price:price,
            category: category,
            description: description,
            featured: featured,
            discount: discount,
            magazine: magazine,
            mainImage: urls,
            createdBy: userExists._id
        }
        await pictureArtModel.findOneAndUpdate({_id: req.params.productId}, product);
        res.status(201).json({ msg: "Art Product Updated successful"})
    })
}

const deleteSingleProduct = async (req,res) => {
    const { productId } = req.params;
    const product = await pictureArtModel.findOne({ _id: productId });
    if(!product) {
       return res.status(400).json({ msg: `No product with such id of ${productId}` })
    }
    await product.deleteOne({ _id: productId })
    res.status(200).json({ msg: "Product deleted successfully" })
}

const deleteSingleProductEditor = async (req,res) => {
    const { productId } = req.params;
    const user = req.user;

    const product = await pictureArtModel.findOne({ _id: productId });
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

const updateProductEditor = async (req,res) => {
    const user = req.user;
    const userExists = await UserModel.findOne({ email: user.email });
    if(!userExists) {
        return res.status(409).json({ msg: "No user found" })
    }
    const productUpdate = await pictureArtModel.findOne({ _id: req.params.productId });
    if(!productUpdate){
     return res.status(400).json({ msg: "Product doesnot exist" })
    }

    if(productUpdate.createdBy.toString() !== userExists._id.toString()){
        return res.status(400).json({ msg: "You are not authorized to update the product of another user" })
    } else {
        handleMultipleImageUpload(req,res, async (err) => {
            const { title,price,category,description,featured,discount,magazine } = req.body;
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
                folder: "pictureArts",
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
           productUpdate.title = title;
           productUpdate.price = price,
           productUpdate.category = category,
           productUpdate.description = description,
           productUpdate.featured = featured,
           productUpdate.discount = discount,
           productUpdate.magazine = magazine,
           productUpdate.mainImage = urls,
           productUpdate.createdBy = userExists._id
           await productUpdate.save();
    
           res.status(201).json({ msg: "Art Product Updated successful"})
        })
    }
}

const getAllProductsEditor = async (req,res) => {
    const user = req.user;
    if(!user) {
       return res.status(400).json({ msg: "Please Login to view the products" })
    }
    const userExists = await UserModel.findOne({ email: user.email });

    if(!userExists) {
        return res.status(400).json({ msg: "No User found" })
     }

     const products = await  pictureArtModel.find({ createdBy: userExists._id });
     res.status(200).json({ ...products })
}

const addCommentArt = async (req,res) => {
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
    const productart = await pictureArtModel.findOne({_id: productId});

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

    productart.comments = newComment;
    await productart.save();
    res.status(200).json({ msg:'comment added' })
}

const addRating = async (req,res) => {
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
    const productart = await pictureArtModel.findOne({_id: productId});

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

    productart.userRatings = newRating;
    await productart.save();
    res.status(200).json({ msg:'rate added' })
}


const getProductComments = async (req,res) => {
    const { productId }=req.params;
    const productart = await pictureArtModel.findOne({_id: productId});

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

const getProductRating = async (req,res) => {
    const { productId }=req.params;
    const productart = await pictureArtModel.findOne({_id: productId});

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
    getAllProducts,
    addNewArtProduct,
    getSingleArtProduct,
    deleteSingleProduct,
    updateProduct,
    updateProductEditor,
    deleteSingleProductEditor,
    getAllProductsEditor,
    addCommentArt,
    addRating,
    getProductComments,
    getProductRating
}