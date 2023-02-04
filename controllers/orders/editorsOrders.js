const ordersModel = require("../../models/ordersModel");
const userModel = require("../../models/userSchema");


const getEditorsOrder = async (req,res) => {
    const user = req.user;
    if(!req.user){
        return res.status(400).json({ msg: "Please login" })
    }
    const userExists = await userModel.findOne({ email: user.email });
    if(!userExists){
        return res.status(400).json({ msg: "No user found" })
    }
    const userOrders = await ordersModel.find({});
    const OrdersItems = userOrders.map((order) => {
        const orderItems = order.items.map((item) => {
            return item
        })
        return orderItems;
    })
    const flatArray = OrdersItems.flat();
    const editorOrders = flatArray.filter((order) => order.createdBy.toString() === userExists._id.toString() );
    if(editorOrders.length < 0) {
        return res.status(200).json({ msg: "You currently have no orders" })
    }

    res.status(200).json({ editorOrders });
}

module.exports = {
    getEditorsOrder
}