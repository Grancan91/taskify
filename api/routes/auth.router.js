//Router consta de: clase router de express para lanzar las rutas.
const router = require('express').Router();

const { signUp } = require('../controllers/auth.controller');

router.post('/signup', signUp)

module.exports = router