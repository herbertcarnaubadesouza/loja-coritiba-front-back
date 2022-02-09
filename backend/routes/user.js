const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//UPDATE
router.put("/:id", verifyTokenAndAuthorization, async (request, response) => {
  if (request.body.password) {
    request.body.password = CryptoJS.AES.encrypt(
      request.body.password,
      process.env.PASSWORD_SEC
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      request.params.id,
      {
        $set: request.body,
      },
      { new: true }
    );
    response.status(200).json(updatedUser);
  } catch (err) {
    response.status(500).json(err);
  }
});

//DELETE
router.delete(
  "/:id",
  verifyTokenAndAuthorization,
  async (request, response) => {
    try {
      await User.findOneAndDelete(request.params.id);
      response.status(200).json("Usuário deletado corretamente");
    } catch (err) {
      response.status(500).json(err);
    }
  }
);




//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (request, response) => {
  try {
    const user = await User.findById(request.params.id);
    const { password, ...others } = user._doc;

    response.status(200).json(others);
  } catch (err) {
    response.status(500).json(err);
  }
});



//GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (request, response) => {
  const query = request.query.new;

  try {
    const users = query 
        ? await User.find().sort({_id: -1}).limit(5)
        : await User.find();

    response.status(200).json(users);
  } catch (err) {
    response.status(500).json(err);
  }
});


//GET USER STATS

router.get("/stats", verifyTokenAndAdmin, async (request, response) =>{

    const date = new Date();

    //pegando o ultrimo ano
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))


    try{


        const data = await User.aggregate([
            //verifica se foi criado acima do ano passado
            {$match: { createdAt : {$gte: lastYear} } },
            {
                $project:{
                    //pegando o mês
                    month: {$month: "$createdAt"}
                },
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum: 1},
                }
            },
        ]);

        response.status(200).json(data);

    }catch(err){
        response.status(500).json(err);
    }


})

module.exports = router;
