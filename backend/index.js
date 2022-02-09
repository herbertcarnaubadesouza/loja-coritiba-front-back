const express = require("express");
const app = express();
const mongoose = require("mongoose");
const stringConexao = require("dotenv");
const rotaUsuario = require("./routes/user");
const rotaProduto = require("./routes/product");
const authRoute = require("./routes/auth");


stringConexao.config();


//Conexão com o mongo
mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("Conexão realizada com sucesso!"))
    .catch((err) => {
        console.log(err)
});

app.use(express.json());
app.use("/api/users", rotaUsuario);
app.use("/api/product", rotaProduto);
app.use("/api/auth", authRoute);


app.listen(process.env.PORT || 5000, ()=>{
    console.log("Backend server is running!");
});