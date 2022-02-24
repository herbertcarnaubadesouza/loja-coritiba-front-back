const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  //pegando da request
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user || user == null) {
      return res.status(401).json("Dados inválidos");
    }

    const senhaCripto = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SEC
    );

    const senhaNova = senhaCripto.toString(CryptoJS.enc.Utf8);

    if (senhaNova !== req.body.password) {
      return res.status(401).json("Dados inválidos");
    }

    //gerando o token
    const accessToken = jwt.sign(
      {
        id: user.id,
        isAdmin: user.isAdmin,
        email: user.email,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    //mando tudo, menos a senha
    const { password, ...others } = user._doc;

    return res.status(200).json({ ...others, accessToken });
  } catch (err) {
    console.log("Erro 500");
    return res.status(500).json(err);
  }
});

module.exports = router;
