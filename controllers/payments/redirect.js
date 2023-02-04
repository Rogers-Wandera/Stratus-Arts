const Flutterwave = require('flutterwave-node-v3');
const ordersModel = require('../../models/ordersModel');
const tempCartModel = require('../../models/tempCartModel');

const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

const redirectUser = async (req,res) => {
    const resp = JSON.parse(req.query.resp);
    if(resp.status === 'success'){
        const transactionRef = resp.data.txRef;
        const preSavedOrder = await tempCartModel.findOne({ transactionRef: transactionRef });
        if(!preSavedOrder){
            res.status(400).json({ msg: "No order found" })
        }else{
            await flw.Transaction.verify({id: resp.data.id})
            .then(async (response) => {
                if(response.data.status === "successful"
                && response.data.amount === preSavedOrder.orderTotal
                && response.data.currency === preSavedOrder.currency){
                    const orderSummary = {
                        userId: preSavedOrder.userId,
                        transactionRef: transactionRef,
                        items: preSavedOrder.items,
                        orderTotal: response.data.amount,
                        totalQuantity: preSavedOrder.totalQuantity,
                        paymentType: response.data.payment_type
                    }
                    const savedOrder = await ordersModel.create({ ...orderSummary })
                    await preSavedOrder.deleteOne({ transactionRef: transactionRef })
                    res.status(200).json({ msg: "Order Successful", savedOrder})
                } else {
                    await preSavedOrder.deleteOne({ transactionRef: transactionRef })
                    res.status(400).send("<h1>Faile</h1>")
                }
            })
        }
    }
}

module.exports = redirectUser
