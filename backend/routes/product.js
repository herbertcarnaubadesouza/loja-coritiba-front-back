const { request, response } = require("express");
const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE

router.post("/", verifyTokenAndAdmin, async (request, response) => {
  const newProduct = new Product(request.body);

  try {
    const savedProduct = await newProduct.save();
    response.status(200).json(savedProduct);
  } catch (err) {
    response.status(500).json(err);
  }
});

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (request, response) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedProduct);
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
      await Product.findOneAndDelete(request.params.id);
      response.status(200).json("Produto deletado corretamente");
    } catch (err) {
      response.status(500).json(err);
    }
  }
);

//GET PRODUCTS

//sem validação, todo mundo pode ver os produtos
router.get("/find/:id", async (request, response) => {
  try {
    const produto = await Product.findById(request.params.id);
    response.status(200).json(produto);
  } catch (err) {
    response.status(500).json(err);
  }
});



//GET ALL USERS
router.get("/", async (request, response) => {
  const qNew = request.query.new;
  const qCategory = request.query.category;

  try {
    let produtos;

    if (qNew){
      produtos = await Product.find().sort({createdAt: -1}).limit(5);
    }else if (qCategory){
      produtos = await Product.find({
        categorias:{
          $in: [qCategory],
        },
      });
    }else{
      produtos = await Product.find();
    }

    response.status(200).json(produtos);
  } catch (err) {
    response.status(500).json(err);
  }
});


module.exports = router;
