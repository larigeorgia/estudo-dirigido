const usersService = require ('../service/usersService')

const list = async (req, res) => {
    try {
        const users = await usersService.listUsers();
        res.send(users)
    }catch(error){
        res.status(400).send('Acesso não liberado')
    }
}

module.exports = {
    list
}