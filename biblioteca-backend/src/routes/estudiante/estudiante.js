const {Router} = require('express')
const {crearUsuario,crearLogin} = require('../../controllers/estudiante/estudiante')
const router = Router()


router.post('/estudiantes',crearUsuario);
router.post('/login',crearLogin);


module.exports = router

