const router = require("express").Router();
const stripe = require("../services/stripe");

router.post("/payment", async (request,response) =>{
       
    stripe.charges.create({
        source:request.body.tokenId,
        amount: request.body.amount,
        currency:"brl"
    }, (stripeErr, stripeResponse)=>{
        if(stripeErr){
            response.status(500).json(stripeErr);
        }else{
            response.status(200).json(stripeResponse);
        }
    })
})

module.exports = router;