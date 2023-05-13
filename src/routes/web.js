const express = require('express')
const { handleGetHomepage } = require('../controllers/homeController')
const router = express.Router()

router.get('/', handleGetHomepage)

router.get('/abc', (req, res) => {
    res.render('example.ejs')
})


module.exports = router