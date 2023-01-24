const express = require("express");
const { logger } = require("./middlewares/logs");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const cookieParser = require("cookie-parser");
const credentials = require("./middlewares/credentials");
const connectDB = require("./config/connectDB");
const mongoose = require("mongoose");
const loginRouter = require("./routes/loginRoute");
const registerRouter = require("./routes/registerRoute");
const errorHandler = require("./middlewares/errorHandler");
const refreshRouter = require("./routes/refreshRoute");
const logoutRouter = require("./routes/logoutRoute");
const verifyEmailRouter = require("./routes/verifyEmailRoute");
const productArtRouter = require("./routes/products/artProductsRoute");
const productMagazineRouter = require("./routes/products/magazineProductsRoute");
const verifyJWT = require("./middlewares/verifyJWT");
const uploadProfileRouter = require("./routes/uploadProfile");
const cloudinary =  require("cloudinary").v2;

require("dotenv").config();
const app = express();

app.use(logger);
app.use(credentials);

app.use(cors(corsOptions));

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
    secure: true
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(cookieParser());

app.use("/api/v1/login", loginRouter);
app.use("/api/v1/register", registerRouter);
app.use("/api/v1/refresh", refreshRouter)
app.use("/api/v1/logout", logoutRouter)
app.use("/api/v1/", verifyEmailRouter)
app.use("/api/v1/products",productArtRouter)
app.use("/api/v1/magazines",productMagazineRouter)
app.use("/api/v1/profile-picture",verifyJWT ,uploadProfileRouter)

const PORT = process.env.PORT || 5000;

app.use(errorHandler)

mongoose.set("strictQuery", false);
const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();