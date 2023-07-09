const {Router} = require('express')
const {crearSolicitud,getSolicitudes} = require('../../controllers/solicitud-ayuda/solicitud')
const router = Router()


router.post('/solicitudes',crearSolicitud);
router.get('/solicitudes',getSolicitudes);

module.exports = router;

