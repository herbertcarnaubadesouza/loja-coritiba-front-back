const Stripe = require("stripe").Stripe



const instance = new Stripe(`${process.env.STRIPE_KEY}`, {
    apiVersion:"2020-08-27",
    appInfo: {
        name: "lojaCoxa",
        version: "1.0"
    }
})


module.exports = instance