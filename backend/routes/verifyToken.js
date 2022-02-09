const req = require("express/lib/request");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken")



const verifyToken = (request, response, next)=>{
    const authHeader = request.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) =>{
            if (err)response.status(403).json("Token inválido!")
            request.user = user;
            next();
        })
    }else{
        return response.status(401).json("Você precisa autenticar com o JWT")
    }
};

//verifica a autorização
const verifyTokenAndAuthorization = (request,response,next) =>{
    verifyToken(request,response, ()=>{
        if(request.user.id === request.params.id || request.user.isAdmin){
            next()
        }else{
            response.status(403).json("Você não está permitido");
        }
    })
}


//verifica a autorização
const verifyTokenAndAdmin = (request,response,next) =>{
    verifyToken(request,response, ()=>{
        if(request.user.isAdmin){
            next();
        }else{
            response.status(403).json("Você não está permitido");
        }
    })
}


module.exports = {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} 


