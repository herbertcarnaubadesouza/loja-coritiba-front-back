const Order = require("../models/Order");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyToken, async (request, response) => {
  const newOrder = new Order(request.body);

  try {
    const savedOrder = await newOrder.save();
    response.status(200).json(savedOrder);
  } catch (err) {
    response.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (request, response) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedOrder);
  } catch (err) {
    response.status(500).json(err);
  }
});

//DELETE
router.delete(
  "/:id",
  verifyTokenAndAdmin,
  async (request, response) => {
    try {
      await Order.findOneAndDelete(request.params.id);
      response.status(200).json("Produto deletado corretamente");
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//GET USER ORDERS

router.get("/find/:userid", verifyTokenAndAuthorization,async (request, response) => {
  try {
    const orders = await Order.find(request.params.userId);
    response.status(200).json(orders);
  } catch (err) {
    response.status(500).json(err);
  }
});



// //GET ALL 

router.get("/", verifyTokenAndAdmin, async(request,response)=>{
    try{
        const orders = await Order.find();
        response.status(200).json(orders);
    }catch(err){
        response.status(500).json(err);
    }
})



// GET MONTHLY INCOME

router.get("/income", verifyTokenAndAdmin, async (request, response) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      response.status(200).json(income);
    } catch (err) {
        response.status(500).json(err);
    }
  });





module.exports = router;
