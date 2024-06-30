const registerService = require("../service/registerService")

const authenticate = async (req, res)=>{
    try {
        const {userName, password} = await registerService.authenticateUser(req.body.userName, req.body.password)
        res.send({userName, password})
    }catch (error){
        res.status(400).send('Erro na autenticação')
    }
}

module.exports = {
    authenticate
}