
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function Home(req, res){
    res.send({api:"online", version: "1.4.4"})
}

async function Auth(req, res){

    let email = req.body.email;
    let senha = req.body.senha;

    if(!email || !senha) {
        res.send({error:true, msg:"Falta Parametros"})
        return;
    }

    if(email === "lucaspedro@gmail.com" && senha === "232323"){

        const id = 1;

        const token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300
        });

        res.send({auth:true, msg:"Autenticado com Sucesso!", token: token})
        return;
    } else {
        res.send({error:true, msg:"Usuario ou Senha Invalidos"})
        return;  
    }
}

async function Profile(req, res){

    if(!req.userId) {
        res.send({error:true, auth:false})
    }

    res.send({hello:"ola Niggar", user: req.userId})

}

async function Dash(req, res){

    if(!req.userId) {
        res.send({error:true, auth:false})
    }

    res.send({error:false, user: req.userId})
}

async function verify(req, res){
    const token = req.headers['authorization'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, function(err, decoded){
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
        res.send({succes:true, token: "authenticated"})
    })

}

module.exports = {
    Home,
    Auth,
    Profile,
    Dash,
    verify
}