const express = require("express");
const app = express();
const mongoose = require("mongoose");
const stringConexao = require("dotenv");
const rotaUsuario = require("./routes/user");
const rotaProduto = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const authRoute = require("./routes/auth");

const cors = require("cors");


stringConexao.config();


//Conexão com o mongo
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("Conexão realizada com sucesso!"))
    .catch((err) => {
        console.log(err)
});

app.use(cors());
app.use(express.json());
app.use("/api/users", rotaUsuario);
app.use("/api/products", rotaProduto);
app.use("/api/auth", authRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});