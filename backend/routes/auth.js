const express = require('express')
const router = express.Router()
const auth = require('../middleware/authentication')

const {register, login, verifyUser} = require('../controllers/auth')

router.post('/register', register)
router.post('/register/verify', auth, verifyUser)
router.post('/login', login)

module.exports = router