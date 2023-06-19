const {Router} = require('express')
const router = Router()

const { renderIndex, renderForm } = require('../controllers/form.controller.js')

router.get('/form',renderForm);

module.exports = router