const ordersModel = require("../../models/ordersModel");
const userModel = require("../../models/userSchema")

const getOrders = async (req,res) => {
    const user = req.user;
    if(!req.user){
        return res.status(400).json({ msg: "Please login" })
    }
    const userExists = await userModel.findOne({ email: user.email });
    if(!userExists){
        return res.status(400).json({ msg: "No user found" })
    }

    const userOrders = await ordersModel.find({ userId: userExists._id });
    if(!userOrders){
        return res.status(400).json({ msg: "No orders found please make an order" })
    }

    res.status(200).json({ userOrders })
}

const getOrdersAdmin = async (req,res) => {
    const user = req.user;
    if(!req.user){
        return res.status(400).json({ msg: "Please login" })
    }
    const userExists = await userModel.findOne({ email: user.email });
    if(!userExists){
        return res.status(400).json({ msg: "No user found" })
    }

    const Orders = await ordersModel.find({});
    if(!Orders || Orders.length < 0){
        return res.status(400).json({ msg: "No orders found" })
    }

    if(Orders.length < 0){
        return res.status(400).json({ msg: "No orders found" })
    }

    res.status(200).json({ Orders })
}

const changeOrderStatusAdmin = async (req,res) => {
    const { id,value } = req.body;
    if(!id || !value){
        return res.status(200).json({ msg: "Please provide id and value" })
    }
    const orderExists = await ordersModel.findOne({ _id: id });
    if(!orderExists){
        return res.status(400).json({ msg: `No order with such ${id}` })
    }

    orderExists.status = value;
    await orderExists.save();
    res.status(200).json({ msg: "Order status updated successfully" })
}

const getSingleOrder = async (req,res) => {
    const { id } = req.params;
    if(!id){
        return res.status(200).json({ msg: "Please provide id" })
    }
    const orderExists = await ordersModel.findOne({ _id: id });
    if(!orderExists){
        return res.status(400).json({ msg: `No order with such ${id}` })
    }
    res.status(200).json({ ...orderExists})
}

const deleteOrderAdmin = async (req,res) => {
    const { id } = req.params;
    if(!id){
        return res.status(200).json({ msg: "Please provide id" })
    }
    const orderExists = await ordersModel.findOne({ _id: id });
    if(!orderExists){
        return res.status(400).json({ msg: `No order with such ${id}` })
    }
    await orderExists.deleteOne({ _id: id })
    res.status(200).json({ msg: "Order deleted successful" })
}

module.exports = {
    getOrders,
    getOrdersAdmin,
    changeOrderStatusAdmin,
    getSingleOrder,
    deleteOrderAdmin,
}