const express = require('express')
const router = express.Router()
const usersController = require('../controllers/usersController')

router.get('/users', usersController.list)

module.exports = router