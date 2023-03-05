const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const StripePayment = async (req,res) => {
    const product = req.body;
   try {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: [
            {
                price_data:{
                    currency: "usd",
                    product_data: {
                        name: product.name
                    },
                    unit_amount: product.price
                },
                quantity: product.quantity
            }
        ],
        success_url: "http://localhost:3000/success", 
        cancel_url: "http://localhost:3000/cancel", 
    })
    res.status(200).json({ url: session.url })
   } catch (error) {
        res.status(500).json({ msg: error.message })
   }
}


module.exports = StripePayment