const registerService = require("../service/registerService")

const register = async (req, res)=>{
    try{
        const user = await registerService.registerUser(req.body)
        res.status(201).send(user)
    }catch(error) {
        res.status(400).send('Erro ao cadastrar usuário')
    }
}

module.exports = {
    register
}