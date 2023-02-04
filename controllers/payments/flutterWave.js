const Flutterwave = require('flutterwave-node-v3');
const tempCartModel = require('../../models/tempCartModel');
const UserModel = require('../../models/userSchema');

const flw = new Flutterwave(process.env.FLW_PUBLIC_KEY, process.env.FLW_SECRET_KEY);

const flutterWavePayment = async (req,res) => {
    const { number, network, currency } = req.body;

    const user = req.user

    const { items } = req.body;
    const { cartTotal,quantityTotal } = items[1];

    const cartItems = items[0];
    console.log(cartItems)

    if(!user){
        return res.status(409).json({ msg: "Please login" })
    }

    if(!number || !network || !currency || !items){
        return res.status(500).json({ msg: "Please provide phone number, network, currency, and items" })
    }

    const userExists = await UserModel.findOne({ email: user.email });
    if(!userExists) {
       return res.status(409).json({ msg: "No user defined" })
    }

    const ref = userExists._id + cartTotal + userExists._id + require('crypto')
    .randomBytes(16).toString("hex");


    try {

        const payload = {
            phone_number: number,
            network: network,
            fullname: user.displayName,
            amount: cartTotal,
            currency: 'UGX',
            email: userExists.email,
            tx_ref: ref,
            redirect_url: 'http://localhost:5000/api/v1/payments/success'
        }
        const tempCart = {
            userId: userExists._id,
            items: cartItems,
            orderTotal: cartTotal,
            totalQuantity: quantityTotal,
            transactionRef: ref,
            currency: currency
        }

       await flw.MobileMoney.uganda(payload).then(async (response) => {
            const result = await response;
            console.log(result)
            if(Object.values(result).includes('success')){
                try {
                    await tempCartModel.create({ ...tempCart })
                    res.status(200).json({ url: result.meta.authorization.redirect })
                } catch (error) {
                    console.log(error.message)
                }
            }else{
                console.log('none')
            }
        }).catch((err) => err);
    } catch (error) {
        res.status(400).json({ msg: error })
    }
}

module.exports = flutterWavePayment
