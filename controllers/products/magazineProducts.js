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
        const product = {
            title: title,
            price:price,
            category: category,
            description: description,
            featured: featured,
            discount: discount,
            pdfFile: urls,
            artProducts:[...newartProducts],
            createdBy: userExists._id
        }
        await magazineModel.findOneAndUpdate({_id: req.params.productId}, product);
        res.status(201).json({ msg: "Magazine Product Updated successful"})
    })
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

module.exports = {
    getAllMagazineProducts,
    addNewMagazineProduct,
    updateMagazineProduct,
    getSingleMagazineProduct,
    deleteSingleMagazineProduct
}