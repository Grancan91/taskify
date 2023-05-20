//Router consta de: clase router de express para lanzar las rutas.
const router = require('express').Router();
//Routes:
const authRoute = require('./auth.router')

router.use('/auth', authRoute)

module.exports = router;